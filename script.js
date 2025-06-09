// === Treasure Hunt Generator ===

// Add up to 100 questions here
questions = [
    "Liam has 12 pencils and finds 7 more on the floor. How many pencils does he have now?",
    "A box had 20 cookies. Emma ate 5 of them. How many cookies are left?",
    "There are 3 shelves with 9 books each. How many books in total?",
    "A pizza was cut into 24 slices. 6 friends share it equally. How many slices per friend?",
    "If there are 4 bags with 5 apples each, how many apples are there altogether?",
    "Sarah has 14 balloons. Half of them fly away. How many are left?",
    "You see 8 birds on a wire and 6 more fly in. How many birds are on the wire now?",
    "Tim had 10 marbles. He lost 3. How many marbles does he have now?",
    "Each student gets 5 stickers. There are 5 students. How many stickers are given out?",
    "36 oranges are shared among 6 baskets. How many in each basket?",
    "Noah collected 11 stamps and bought 9 more. How many stamps in total?",
    "Sophie had 18 grapes. She gave 7 to her sister. How many does she have left?",
    "There are 4 rows of 4 chairs. How many chairs are there?",
    "A farmer has 40 eggs and puts them into 8 boxes equally. How many eggs per box?",
    "Emily picked 14 flowers and her friend gave her 6 more. How many flowers does she have?",
    "Tom had 25 toy cars. He gave 10 to his cousin. How many cars does he still have?",
    "There are 3 shelves with 6 trophies on each. How many trophies altogether?",
    "60 pencils are shared between 10 students. How many pencils per student?",
    "Anna has 13 candies. She wins 8 more. How many candies does she have?",
    "Jake had 30 coins but spent 19. How many coins remain?",
    "Olivia baked 17 muffins and then 8 more. How many did she bake altogether?",
    "Mason read 6 books last week and 5 this week. How many books did he read in total?",
    "Lucy had 28 crayons. She gave away 13. How many crayons does she still have?",
    "Each of 7 children gets 3 chocolates. How many chocolates were given?",
    "A jug holds 36 cups of water. It's poured into 6 jars. How many cups per jar?",
    "Sophia had 10 toy animals. She lost 4. How many does she have left?",
    "You have 15 apples and buy 10 more. How many apples now?",
    "Ethan has 20 marbles. He gives 5 to his friend. How many does he keep?",
    "There are 5 rows of 7 desks. How many desks in total?",
    "A baker makes 64 cupcakes and puts them in 8 trays. How many per tray?",
    "Lily finds 6 seashells in the morning and 8 more in the evening. How many total?",
    "Jack had 50 coins. He spent 15. How many coins left?",
    "Each of 4 friends gets 4 bananas. How many bananas in total?",
    "72 chocolates are packed into 9 boxes equally. How many per box?",
    "Isla had 12 toys. She gave 3 to her brother. How many does she have now?",
    "A bag has 17 candies. Another bag has 12. How many candies in total?",
    "There are 3 baskets, each with 5 apples. How many apples altogether?",
    "Sam had 25 stickers and gave away 11. How many are left?",
    "4 rows of 6 chairs are set up. How many chairs in total?",
    "54 pencils are divided among 6 students. How many each?",
    "Luna drew 15 pictures. She added 9 more. How many pictures now?",
    "Leo had 34 blocks. He gave 14 to Mia. How many does he have now?",
    "A classroom has 6 tables. Each table seats 4 students. How many students in total?",
    "A team has 45 balls to divide between 5 players. How many each?",
    "A frog jumps 7 times in the morning and 6 in the afternoon. How many jumps?",
    "James had 40 marbles but gave 19 to his friend. How many left?",
    "Emma picks 5 flowers each day for 6 days. How many in total?",
    "A box has 81 cookies. They are shared between 9 friends. How many per friend?",
    "Ben had 22 balloons and lost 10. How many does he have now?",
    "Chloe has 18 dolls. Her aunt gives her 12 more. How many dolls now?",
    "There are 4 boxes with 3 pencils each. How many pencils total?",
    "A group of 6 kids gets 5 candies each. How many candies altogether?",
    "50 apples are shared between 5 baskets. How many apples per basket?",
    "Mia had 16 cupcakes and gave 9 away. How many left?",
    "You found 13 coins on Monday and 7 more on Tuesday. How many in total?",
    "Noah baked 20 cookies. He gave 6 to his sister. How many left?",
    "You get 3 stars every day for 5 days. How many stars in total?",
    "100 pens are split evenly into 10 cases. How many in each case?",
    "A monkey eats 4 bananas each day for 7 days. How many bananas in total?",
    "There are 5 shelves with 8 books each. How many books total?",
    "Ella had 15 marbles. She lost 7. How many remain?",
    "You bought 6 oranges and then 5 more. How many oranges now?",
    "A shop sold 30 toys on Monday and 25 on Tuesday. How many toys sold in total?",
    "Tom found 10 coins and gave 4 to his brother. How many coins does he have now?",
    "There are 3 trays with 9 cupcakes each. How many cupcakes total?",
    "80 pages are divided into 8 books. How many pages per book?",
    "Zoe has 24 crayons. She gives 10 to her sister. How many left?",
    "Liam builds 5 towers with 4 blocks each. How many blocks used?",
    "Each of 6 jars holds 6 marbles. How many marbles altogether?",
    "You plant 7 seeds each in 5 rows. How many seeds total?",
    "Henry had 44 toy cars. He gave 20 to friends. How many left?",
    "There are 9 baskets with 2 oranges in each. How many oranges?",
    "Alice has 60 candies split into 6 jars. How many per jar?",
    "Nina baked 14 cookies. She gave away 9. How many left?",
    "Oscar reads 5 books a week for 4 weeks. How many books total?",
    "You have 3 toy chests, each holding 12 toys. How many toys?",
    "Jade picked 25 flowers and gave 8 to her friend. How many left?",
    "Each bag holds 10 pencils. You have 6 bags. How many pencils?",
    "Sam saw 7 birds, and later saw 4 more. How many birds in total?",
    "You ate 3 cookies each day for 5 days. How many cookies eaten?",
    "There are 5 rows with 3 chairs each. How many chairs total?",
    "Sally had 17 apples and gave 5 away. How many left?",
    "Mark collected 10 shells. He found 6 more. How many now?",
    "You get 2 points per game and play 6 games. How many points?",
    "Lucy baked 18 cupcakes. She gave 7 away. How many remain?",
    "You collect 3 stickers each day for 4 days. How many total?",
    "Anna saw 8 butterflies in the garden and 5 more at the park. How many total?",
    "Max bought 20 marbles and lost 8. How many left?",
    "You pack 30 sandwiches into 5 bags. How many per bag?",
    "Each student receives 4 books. There are 7 students. How many books?",
    "Emily had 33 coins and gave 11 away. How many coins now?",
    "You see 3 rows of 10 seats. How many seats in total?",
    "A cake is sliced into 24 pieces shared by 6 people. How many per person?",
    "You receive 2 pencils each from 4 teachers. How many pencils total?",
    "Josh read 13 books last month and 6 this month. How many books total?",
    "A fish lays 40 eggs. 18 hatch. How many eggs didn’t hatch?",
    "Ella has 28 stickers and gives 12 to a friend. How many left?",
    "You have 5 pets and get 3 more. How many pets do you have now?",
    "There are 6 ice creams. You eat 4. How many are left?"
]

  function getRandomFive(arr) {
    const copy = [...arr];
    const result = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * copy.length);
      result.push(copy.splice(index, 1)[0]);
    }
    return result;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.treasure-hunt');
    if (!list) return;

    const selected = getRandomFive(questions);
    list.innerHTML = selected.map(q => `<li style="margin-bottom:8mm;">${q} <strong>Answer:</strong> ________</li>`).join('');
  });
