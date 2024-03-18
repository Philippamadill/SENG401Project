use SENG401;
DELETE FROM Review;
-- only need this if youre resesting your db
insert into Review (ISBN, username, stars, description)
values (
        '200',
        'user1',
        5,
        "I absolutely loved Pride and Prejudice! The characters are so well-developed, and the romance between Elizabeth Bennet and Mr. Darcy is timeless. Jane Austen's wit and social commentary make this novel a joy to read."
    ),
    (
        '800',
        'user2',
        4,
        "The Picture of Dorian Gray is a captivating exploration of vanity and corruption. Oscar Wilde's prose is enchanting, and the novel's themes still resonate today. A thought-provoking read."
    ),
    (
        '100',
        'user3',
        4,
        "The Hunger Games is a thrilling dystopian adventure that kept me on the edge of my seat. Suzanne Collins' world-building is incredible, and the character of Katniss Everdeen is so compelling. Couldn't put it down!"
    ),
    (
        '1400',
        'user1',
        3,
        "Divergent is an action-packed dystopian adventure with a strong and relatable heroine. Veronica Roth's world-building is immersive, and the concept of different factions based on personality traits is fascinating. Can't wait to read the rest of the series!"
    ),
    (
        '1300',
        'user2',
        4,
        "Jane Eyre is a classic for a reason. Charlotte Brontë's storytelling is masterful, and Jane's journey from orphan to independent woman is inspiring. A must-read for anyone who loves romance and strong female protagonists."
    ),
    (
        '1100',
        'user3',
        1,
        "The Martian fell flat for me. The scientific explanations were tedious, and I couldn't empathize with the protagonist. I found it hard to stay engaged with the story."
    ),
    (
        '100',
        'user1',
        2,
        "I didn't enjoy The Hunger Games as much as I expected. The plot felt derivative, and the characters lacked depth. It didn't live up to the hype for me."
    ),
    (
        '500',
        'user2',
        1,
        "I struggled to connect with The Great Gatsby. The pacing was slow, and the writing style felt outdated. It's not a book I would recommend."
    ),
    (
        '700',
        'user1',
        5,
        "The Silent Patient is a gripping psychological thriller that kept me guessing until the very end. Alex Michaelides' storytelling is masterful, and the twist at the conclusion left me stunned. A must-read for fans of the genre."
    ),
    (
        '600',
        'user3',
        3,
        "Where the Crawdads Sing is a beautiful and haunting novel that captivated me from the first page. Delia Owens' vivid descriptions of the marsh landscape and the coming-of-age story of Kya are unforgettable. I couldn't put it down!"
    ),
    (
        '1500',
        'user1',
        2,
        "Red Queen didn't live up to the hype for me. The plot felt predictable, and the characters lacked depth. I was hoping for more from such a popular fantasy series."
    ),
    (
        '1200',
        'user2',
        1,
        "While The Da Vinci Code had an intriguing premise, I felt that it relied too heavily on plot twists at the expense of character development. The pacing was uneven, and I found some of the historical inaccuracies distracting."
    ),
    (
        '1200',
        'user3',
        5,
        "The Da Vinci Code is a thrilling blend of mystery and conspiracy. Dan Brown's fast-paced storytelling kept me guessing until the very end, and the novel's exploration of art and history is fascinating. A real page-turner!"
    ),
    (
        '600',
        'user1',
        2,
        "Where the Crawdads Sing was disappointing. The pacing was slow, and I found the protagonist's actions unrealistic. The hype surrounding this book didn't live up to my expectations."
    ),
    (
        '300',
        'user2',
        2,
        "I struggled to get through 1984. The writing style was dry, and I found the political allegory heavy-handed. It's not a book I would recommend for casual readers."
    ),
    (
        '400',
        'user3',
        3,
        "To Kill a Mockingbird is a timeless classic that tackles important themes of racism and injustice with grace and empathy. Harper Lee's storytelling is powerful, and the character of Atticus Finch is unforgettable. A must-read for everyone."
    ),
    (
        '900',
        'user2',
        4,
        "Frankenstein is a haunting tale of ambition and hubris that explores the consequences of playing god. Mary Shelley's prose is atmospheric, and the novel's themes of loneliness and alienation are still relevant today. A masterpiece of gothic literature."
    ),
    (
        '1000',
        'user3',
        3,
        "All the Light We Cannot See is a beautifully written novel that weaves together the stories of two individuals during World War II. Anthony Doerr's prose is lyrical, and the characters are deeply moving. I was swept away by this book."
    ),
    (
        '500',
        'user1',
        2,
        "I struggled to connect with The Great Gatsby. The characters felt shallow, and the themes of excess and disillusionment didn't resonate with me. It's not a book I would recommend."
    ),
    (
        '1100',
        'user2',
        4,
        "The Martian is an exhilarating adventure that kept me on the edge of my seat. Andy Weir's attention to scientific detail is impressive, and Mark Watney's resourcefulness is inspiring. I couldn't put it down!"
    ),
    (
        '900',
        'user3',
        1,
        "Frankenstein was a slog to get through. Mary Shelley's prose was dense and inaccessible, and the story dragged on without much excitement. It's not a book I would recommend for casual readers."
    );