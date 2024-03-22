use SENG401;
DELETE FROM BOOK;
insert into Book (
        ISBN,
        book_name,
        book_description,
        cover_image,
        author_name,
        about_author
    )
VALUES (
        '100',
        "The Hunger Games",
        "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.
Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love",
        'https://storage.googleapis.com/bookbook/100.jpg',
        'Suzanne Collins',
        'Since 1991, Suzanne Collins has been busy writing for children’s television. She currently lives in Connecticut with her family and a pair of feral kittens they adopted from their backyard.'
    ),
    (
        '200',
        'Pride and Prejudice',
        "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work 'her own darling child' and its vivacious heroine, Elizabeth Bennet, 'as delightful a creature as ever appeared in print.' The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
        'https://storage.googleapis.com/bookbook/200.jpg',
        'Jane Austen',
        "Jane Austen (1775–1817) was an English novelist known for her keen insight into the social norms and manners of late 18th and early 19th century British society. Her works, including 'Pride and Prejudice,' 'Sense and Sensibility,' and 'Emma,' continue to be celebrated for their wit, irony, and timeless exploration of themes such as love, marriage, and class. Austen's writing style, characterized by sharp social commentary and astute character portrayals, has earned her a lasting place in the canon of English literature."
    ),
    (
        '300',
        '1984',
        "In a dystopian future dominated by a totalitarian regime led by the Party and its enigmatic leader, Big Brother, Winston Smith grapples with the oppressive surveillance and control imposed upon every aspect of life. As a member of the Outer Party, Winston rebels against the Party's strict ideology and clandestinely begins an affair with Julia, a fellow dissenter. Their defiance, however, leads them into the perilous depths of thoughtcrime and betrayal, where the consequences are dire and freedom is but a distant memory.
Through Winston's journey, George Orwell's '1984' explores themes of propaganda, power, and the inherent struggle for individuality in a world governed by fear and manipulation.",
        'https://storage.googleapis.com/bookbook/300.jpg',
        'George Orwell',
        "George Orwell, born Eric Arthur Blair, was an English novelist, essayist, journalist, and critic renowned for his advocacy of social justice and his sharp critique of totalitarianism. '1984' remains one of his most acclaimed works, reflecting his concerns about the erosion of personal freedoms and the dangers of authoritarianism. Orwell's legacy continues to inspire readers to question authority and defend the principles of democracy and human rights."
    ),
    (
        '400',
        'To Kill a Mockingbird',
        "Set in the fictional town of Maycomb, Alabama, during the 1930s, 'To Kill a Mockingbird' explores themes of racial injustice, moral growth, and empathy through the eyes of young Scout Finch. When Scout's father, Atticus Finch, a lawyer, defends Tom Robinson, a black man falsely accused of raping a white woman, the town's deep-seated prejudices are laid bare. Through Scout's innocence and naivety, Harper Lee masterfully confronts the complexities of human nature and the harsh realities of the Jim Crow South.",
        'https://storage.googleapis.com/bookbook/400.jpg',
        'Harper Lee',
        "Harper Lee, born Nelle Harper Lee, was an American novelist best known for her Pulitzer Prize-winning novel, 'To Kill a Mockingbird.' Published in 1960, the novel remains a classic of modern American literature, acclaimed for its poignant portrayal of racial injustice and the moral awakening of its young protagonist. Despite the novel's monumental success, Lee led a private life away from the spotlight, choosing to let her work speak for itself. Her legacy continues to resonate with readers worldwide, inspiring conversations about race, justice, and the enduring power of compassion."
    ),
    (
        '500',
        'The Great Gatsby',
        "Set amidst the glittering excesses of the Roaring Twenties, 'The Great Gatsby' delves into the elusive American Dream through the eyes of narrator Nick Carraway. Drawn into the world of his enigmatic neighbor, Jay Gatsby, Nick becomes witness to Gatsby's relentless pursuit of wealth, status, and the love of his life, Daisy Buchanan. As their lives intertwine amidst lavish parties and hidden desires, F. Scott Fitzgerald crafts a timeless tale of love, betrayal, and the fragility of the American Dream.",
        'https://storage.googleapis.com/bookbook/500.jpg',
        'F. Scott Fitzgerald',
        "F. Scott Fitzgerald was an American novelist and short story writer known for his depictions of the Jazz Age, a term he coined. 'The Great Gatsby,' published in 1925, stands as his magnum opus, capturing the essence of the era with its lyrical prose and piercing social commentary. While initially met with mixed reviews, the novel has since attained legendary status, hailed as a quintessential American masterpiece. Fitzgerald's exploration of the disillusionment and decadence of the 1920s continues to resonate with readers, cementing his place in literary history."
    ),
    (
        '600',
        'Where the Crawdads Sing',
        "Set against the backdrop of the marshes of North Carolina, 'Where the Crawdads Sing' tells the haunting and lyrical tale of Kya Clark, known as the 'Marsh Girl.' Abandoned by her family and shunned by the local community, Kya grows up alone in the wild, developing an intimate connection with the natural world around her. When a popular local man is found dead, suspicion falls on Kya, and her isolated existence becomes the focus of a murder investigation. Delving into themes of love, loss, and resilience, Delia Owens weaves a mesmerizing narrative that captivates readers with its evocative prose and richly drawn characters.",
        'https://storage.googleapis.com/bookbook/600.jpg',
        'Delia Owens',
        "Delia Owens is an American author and wildlife scientist best known for her debut novel, 'Where the Crawdads Sing.' Published in 2018, the novel became an instant sensation, topping bestseller lists and garnering widespread critical acclaim. Drawing on her own experiences studying wildlife in remote areas, Owens infuses the novel with vivid descriptions of the natural world, creating a breathtaking backdrop for her gripping story. 'Where the Crawdads Sing' has touched the hearts of millions of readers worldwide, solidifying Owens' reputation as a master storyteller."
    ),
    (
        '700',
        'The Silent Patient',
        "In 'The Silent Patient,' Alicia Berenson, a renowned painter, shoots her husband Gabriel five times in the face and then never speaks another word. Theo Faber, a forensic psychotherapist, becomes obsessed with her case and is determined to unravel the mystery behind Alicia's silence. As Theo delves deeper into Alicia's past and her intricate web of secrets, he finds himself confronting his own demons and questioning the nature of truth and perception. With its gripping plot twists and psychological intrigue, Alex Michaelides' debut novel keeps readers on the edge of their seats until the very last page.",
        'https://storage.googleapis.com/bookbook/700.jpg',
        'Alex Michaelides',
        "Alex Michaelides is a British-Cypriot author and screenwriter best known for his debut novel, 'The Silent Patient.' Published in 2019, the novel quickly became a global phenomenon, earning praise for its masterful storytelling and spine-tingling suspense. Drawing on his background in psychotherapy, Michaelides crafts a chilling psychological thriller that explores the darkest corners of the human psyche. 'The Silent Patient' has captivated readers worldwide with its unpredictable twists and turns, solidifying Michaelides' reputation as a rising star in the thriller genre."
    ),
    (
        '800',
        'The Picture of Dorian Gray',
        "Oscar Wilde's 'The Picture of Dorian Gray' is a dark and decadent tale of vanity, corruption, and the pursuit of eternal youth. The novel follows the handsome and charming Dorian Gray, whose portrait, painted by the talented artist Basil Hallward, captures his youthful beauty while Dorian remains untouched by the ravages of time and sin. As Dorian indulges in a life of hedonism and moral decay, his portrait reflects the grotesque consequences of his actions, leading to a harrowing climax that explores the depths of human depravity and the nature of true beauty.",
        'https://storage.googleapis.com/bookbook/800.jpg',
        'Oscar Wilde',
        "Oscar Wilde, born in 1854, was an Irish poet, playwright, and novelist known for his wit, flamboyance, and literary prowess. 'The Picture of Dorian Gray,' published in 1890, remains one of his most enduring works and a classic of Gothic literature. Wilde's exploration of aestheticism, morality, and the consequences of unchecked desire continues to captivate readers with its provocative themes and richly layered narrative. Despite facing controversy and scandal in his own life, Wilde's legacy as a literary icon endures, with 'The Picture of Dorian Gray' standing as a testament to his enduring brilliance."
    ),
    (
        '900',
        'Frankenstein',
        "Mary Shelley's 'Frankenstein; or, The Modern Prometheus' is a groundbreaking work of Gothic fiction that explores themes of ambition, morality, and the consequences of scientific experimentation. The novel follows Victor Frankenstein, a young scientist who becomes obsessed with creating life from dead tissue. When he succeeds in bringing his creature to life, Victor is horrified by its monstrous appearance and abandons it. Rejected by society and tormented by its own existence, the creature seeks revenge against its creator, leading to a tragic confrontation that raises profound questions about the nature of humanity and the responsibility of creators towards their creations.",
        'https://storage.googleapis.com/bookbook/900.jpg',
        'Mary Shelley',
        "Mary Shelley, born in 1797, was an English novelist and writer best known for 'Frankenstein; or, The Modern Prometheus.' Published anonymously in 1818, the novel is considered one of the earliest examples of science fiction and has since become a classic of literature. Drawing on her own experiences and the intellectual milieu of her time, Shelley crafted a gripping narrative that continues to resonate with readers, exploring timeless themes of ambition, isolation, and the search for identity. Shelley's enduring legacy as a pioneer of Gothic fiction is cemented by 'Frankenstein,' which remains a seminal work in the genre."
    ),
    (
        '1000',
        'All the Light We Cannot See',
        "Anthony Doerr's 'All the Light We Cannot See' is a mesmerizing novel set against the backdrop of World War II, weaving together the stories of a blind French girl, Marie-Laure LeBlanc, and a German orphan, Werner Pfennig. As the war rages on and their paths converge, Marie-Laure and Werner must navigate the darkness of conflict and the complexities of morality, courage, and survival. Through Doerr's lyrical prose and intricate storytelling, 'All the Light We Cannot See' illuminates the resilience of the human spirit amidst the chaos and devastation of war.",
        'https://storage.googleapis.com/bookbook/1000.jpg',
        'Anthony Doerr',
        "Anthony Doerr is an American author known for his acclaimed novel 'All the Light We Cannot See.' Published in 2014, the novel received widespread critical acclaim and won the Pulitzer Prize for Fiction in 2015. Drawing on his meticulous research and evocative imagery, Doerr crafts a hauntingly beautiful narrative that captures the heartache and hope of wartime Europe. 'All the Light We Cannot See' has touched the lives of readers around the world, offering a poignant reminder of the power of compassion and the enduring quest for light in the darkest of times."
    ),
    (
        '1100',
        "The Martian",
        "Andy Weir's 'The Martian' is a gripping science fiction novel that follows the harrowing tale of astronaut Mark Watney, who becomes stranded alone on Mars after a disastrous mission. With limited resources and dwindling supplies, Watney must rely on his ingenuity, resourcefulness, and sheer determination to survive the hostile Martian environment and find a way back to Earth. Through Watney's witty narration and nail-biting suspense, 'The Martian' offers a thrilling exploration of human resilience, teamwork, and the indomitable spirit of exploration in the face of overwhelming odds.",
        'https://storage.googleapis.com/bookbook/1100.jpg',
        'Andy Weir',
        "Andy Weir is an American author best known for his debut novel, 'The Martian.' Initially self-published in 2011, the novel gained widespread acclaim and was later adapted into a successful film directed by Ridley Scott. Weir's meticulous attention to scientific detail and his ability to create a compelling narrative have earned him a dedicated following of science fiction enthusiasts. 'The Martian' continues to captivate readers with its blend of humor, suspense, and cutting-edge science, solidifying Weir's reputation as a rising star in the genre."
    ),
    (
        '1200',
        "The Da Vinci Code",
        "Dan Brown's 'The Da Vinci Code' is a thrilling mystery novel that intertwines art, history, and religion in a quest for truth and revelation. When Harvard symbologist Robert Langdon is called to the Louvre Museum to examine a cryptic message left by a murdered curator, he finds himself entangled in a centuries-old conspiracy that could shake the foundations of Christianity. Teaming up with French cryptologist Sophie Neveu, Langdon races against time to unravel the secrets hidden within famous works of art and uncover the truth behind the enigmatic Priory of Sion. With its intricate puzzles, shocking revelations, and pulse-pounding suspense, 'The Da Vinci Code' is a page-turner that captivates readers until the very last page.",
        'https://storage.googleapis.com/bookbook/1200.jpg',
        'Dan Brown',
        "Dan Brown is an American author known for his fast-paced thrillers filled with codes, symbols, and hidden truths. 'The Da Vinci Code,' published in 2003, became an international phenomenon, topping bestseller lists around the world and sparking controversy with its provocative theories about religion and history. Brown's masterful blend of fact and fiction, combined with his knack for creating suspenseful plots, has earned him a dedicated following of readers eager to uncover the mysteries he unveils in his novels. 'The Da Vinci Code' remains one of Brown's most popular and enduring works, captivating audiences with its gripping narrative and thought-provoking themes."
    ),
    (
        '1300',
        "Jane Eyre",
        "Charlotte Brontë's 'Jane Eyre' is a timeless classic that follows the journey of its titular heroine from orphaned child to independent woman. Raised by cruel relatives, Jane is sent to Lowood School, where she endures hardship and mistreatment. As she grows older, Jane becomes a governess at Thornfield Hall, where she falls in love with the enigmatic Mr. Rochester. However, dark secrets and obstacles threaten their happiness, forcing Jane to confront her own desires and values. With its themes of love, morality, and the search for identity, 'Jane Eyre' continues to captivate readers with its richly drawn characters and powerful narrative.",
        'https://storage.googleapis.com/bookbook/1300.jpg',
        'Charlotte Brontë',
        "Charlotte Brontë, born in 1816, was an English novelist and poet best known for 'Jane Eyre.' Published in 1847 under the pseudonym 'Currer Bell,' the novel was an instant success and remains one of the most beloved works of English literature. Brontë's depiction of Jane Eyre as a strong, independent woman ahead of her time has inspired generations of readers and feminist scholars. 'Jane Eyre' continues to resonate with audiences worldwide, offering timeless insights into the human condition and the pursuit of love and self-discovery."
    ),
    (
        '1400',
        "Divergent",
        "Veronica Roth's 'Divergent' is a captivating dystopian novel set in a future society divided into factions based on personality traits. The story follows Beatrice Prior, a young woman who discovers she is Divergent, meaning she doesn't fit neatly into any one faction. As Beatrice navigates the dangerous initiation process and uncovers dark secrets about her society, she must grapple with her identity and the consequences of her choices. With its thrilling action, complex characters, and thought-provoking themes of identity and conformity, 'Divergent' has captivated readers of all ages.",
        'https://storage.googleapis.com/bookbook/1400.jpg',
        'Veronica Roth',
        "Veronica Roth is an American author known for her bestselling 'Divergent' trilogy. 'Divergent,' published in 2011, quickly became a sensation, spawning sequels and a successful film adaptation. Roth's exploration of identity, belonging, and the dangers of a rigidly divided society has resonated with readers, sparking discussions about individuality and social change. 'Divergent' continues to be celebrated for its compelling narrative and powerful message of self-discovery and rebellion."
    ),
    (
        '1500',
        "Red Queen",
        "Victoria Aveyard's 'Red Queen' is a thrilling fantasy novel set in a world divided by blood - the Silver-blooded elite with supernatural abilities and the Red-blooded commoners with none. Mare Barrow, a Red-blooded girl, unexpectedly discovers she possesses powers of her own, setting her on a dangerous path amid the political intrigue and power struggles of her society. As Mare navigates the treacherous court of the Silvers, she must confront betrayal, rebellion, and the complexities of loyalty and identity. With its captivating plot twists, dynamic characters, and richly imagined world, 'Red Queen' has enthralled readers with its blend of magic, politics, and adventure.",
        'https://storage.googleapis.com/bookbook/1500.jpg',
        'Victoria Aveyard',
        "Victoria Aveyard is an American author known for her bestselling 'Red Queen' series. 'Red Queen,' published in 2015, quickly became a phenomenon, captivating readers with its gripping storyline and compelling characters. Aveyard's intricate world-building and exploration of themes such as power, privilege, and revolution have earned her a dedicated following of fans. 'Red Queen' continues to captivate readers with its high-stakes drama and imaginative storytelling, solidifying Aveyard's status as a prominent voice in young adult fantasy literature."
    );