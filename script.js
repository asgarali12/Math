// === Page 2: Bingo ===
const BINGO_WORDS = [
  "In All","Per","Less","Altogether","Subtract",
  "Decreased By","Difference","Groups Of","Multiply","Add",
  "Divide","Take Away","Combined","Total","Fewer",
  "Times","Plus","Each","Product","Repeated Addition","Increase","Left","Share"
];

function populateBingo(id) {
  const tbl = document.getElementById(id);
  if (!tbl) return;
  let words = BINGO_WORDS.filter(w => w !== "Free");
  const grid = Array(5).fill().map(() => Array(5).fill(""));
  grid[2][2] = "FREE";
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (r === 2 && c === 2) continue;
      const i = Math.floor(Math.random() * words.length);
      grid[r][c] = words.splice(i, 1)[0];
    }
  }
  tbl.innerHTML = grid.map(row =>
    `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`
  ).join("");
  tbl.querySelectorAll("td").forEach(td =>
    td.addEventListener("click", () => td.classList.toggle("selected"))
  );
}

// === Page 5: Treasure Hunt ===
const TEMPLATES = [
  "Liam has NUM apples and finds NUM more. How many apples now?",
  "Emma bought NUM cookies and ate NUM. How many left?",
  "Tom had NUM marbles and lost NUM. How many remain?",
  "A box has NUM crayons. NUM are broken. How many remain?",
  "Sarah had NUM balloons. Half flew away. How many left?",
  "You see NUM birds then NUM more join. How many total?",
  "Each student gets NUM stickers. There are NUM students. How many given?",
  "NUM cookies shared among NUM friends. How many each and remainder?",
  "You plant NUM seeds in NUM pots. How many total?",
  "A farmer puts NUM eggs into NUM cartons. How many each and remainder?"
];

function randInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function fillNums(template) {
  const nums = [];
  const q = template.replace(/NUM/g, () => {
    const n = randInt(999);
    nums.push(n);
    return n;
  });
  return { q, nums };
}

function computeAnswer(q, nums) {
  if (/lost|ate|broken/i.test(q)) {
    return [nums[0] - nums[1], 0];
  }
  if (/shared|among/i.test(q)) {
    const [a, b] = nums;
    return [Math.floor(a / b), a % b];
  }
  if (/half/i.test(q)) {
    return [Math.floor(nums[0] / 2), 0];
  }
  if (/finds|more/.test(q)) {
    return [nums[0] + nums[1], 0];
  }
  if (/rows|pots/.test(q)) {
    return [nums.reduce((a, b) => a * b, 1), 0];
  }
  return [0, 0];
}

function setupTreasure() {
  const ol = document.querySelector(".treasure-hunt");
  if (!ol) return;
  let html = "";
  for (let i = 0; i < 5; i++) {
    const template = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
    const { q, nums } = fillNums(template);
    const [ans, rem] = computeAnswer(q, nums);
    html += `<li>
      ${q}<br>
      <input type="number" class="answer-input" placeholder="Answer">
      ${rem > 0 ? `<input type="number" class="answer-input" placeholder="Remainder">` : ""}
      <button class="submit-btn">Submit</button>
      <span class="feedback" data-ans="${ans}" data-rem="${rem}"></span>
    </li>`;
  }
  ol.innerHTML = html;

  ol.querySelectorAll(".submit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const li = btn.closest("li");
      const ansIn = Number(li.querySelector(".answer-input").value);
      const remInEl = li.querySelectorAll(".answer-input")[1];
      const remIn = remInEl ? Number(remInEl.value) : 0;
      const fb = li.querySelector(".feedback");
      const ans = Number(fb.dataset.ans);
      const rem = Number(fb.dataset.rem);
      fb.textContent = (ansIn === ans && remIn === rem)
        ? "Correct!"
        : `Wrong: ${ans}${rem ? " r" + rem : ""}`;
    });
  });
}

// === Page 6: Dynamic Drag & Drop ===
const KEYWORDS = {
  Addition:      ["add","plus","total","sum","altogether","increase","combined","in all"],
  Subtraction:   ["subtract","minus","difference","less","take away","lost","ate","fewer"],
  Multiplication:["multiply","times","product","groups of","lots of","repeated addition"],
  Division:      ["divide","share","per","split equally"]
};

function populateDragItems() {
  const container = document.getElementById("dragItems");
  if (!container) return;
  const pool = [];
  for (const [category, words] of Object.entries(KEYWORDS)) {
    words.forEach(w => pool.push({ keyword: w, category }));
  }
  const selected = [];
  while (selected.length < 8 && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    selected.push(pool.splice(i, 1)[0]);
  }
  selected.sort(() => Math.random() - 0.5).forEach(o => {
    const d = document.createElement("div");
    d.className = "item";
    d.draggable = true;
    d.dataset.keyword = o.keyword;
    d.dataset.category = o.category;
    d.textContent = o.keyword;
    container.appendChild(d);
  });
}

function setupDrag() {
  populateDragItems();
  document.querySelectorAll(".item").forEach(it => {
    it.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", it.dataset.keyword);
    });
  });
  document.querySelectorAll(".dropzone").forEach(zone => {
    zone.addEventListener("dragover", e => {
      e.preventDefault();
      zone.classList.add("over");
    });
    zone.addEventListener("dragleave", () => {
      zone.classList.remove("over");
    });
    zone.addEventListener("drop", e => {
      e.preventDefault();
      zone.classList.remove("over");
      const key = e.dataTransfer.getData("text/plain");
      const el = document.querySelector(`.item[data-keyword="${key}"]`);
      if (el) zone.appendChild(el);
    });
  });
  document.getElementById("drag-submit").addEventListener("click", () => {
    let correct = 0, wrong = 0;
    document.querySelectorAll(".item").forEach(it => {
      const ok = it.parentElement.dataset.category;
      if (ok === it.dataset.category) {
        correct++;
        it.style.background = "rgba(0,255,0,0.3)";
      } else {
        wrong++;
        it.style.background = "rgba(255,0,0,0.3)";
      }
      it.draggable = false;
    });
    document.getElementById("drag-feedback").textContent =
      `${correct} correct, ${wrong} wrong`;
  });
}

// === Initialize All ===
document.addEventListener("DOMContentLoaded", () => {
  populateBingo("bingo1");
  setupTreasure();
  setupDrag();
});
