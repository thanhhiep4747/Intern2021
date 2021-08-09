import {Product} from '../models';

class ProductsDB {
    public data: Array<Product> = [
        {
            id: 0,
            type: 1,
            name: 'Balinese-Javanese',
            img: 'https://i1.wp.com/pawesomecats.com/wp-content/uploads/2016/01/Javanese-cat-breed-profile.jpg?fit=740%2C529&ssl=1',
            liked: false,
            description: 'The Balinese, also known as Javanese depending on coat color and pattern, is regal and aristocratic in appearance, but a curious kitten at heart. This breed may appear to be the picture of refinement, but in this elegant body beats the heart of a kitten who loves to have fun. Balinese and Javanese adore people, and want to be with their people. This makes them wonderful companions for those who have the time and desire to appreciate this most intelligent, entertaining companion. Balinese and Javanese are talkative, similar to the Siamese. They are extroverts who get along well with children and other four-legged family members.'
        },
        {
            id: 1,
            type: 0,
            name: 'Shiba Inu',
            img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            liked: false,
            description: 'The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting.[1][2] It looks similar to and is often mistaken for other Japanese dog breeds such as the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds'
        },
        {
            id: 2,
            type: 0,
            name: 'Chihuahua',
            img: 'https://tunglocpet.com/wp-content/uploads/2019/11/chihuahua-puppy-01.jpg',
            liked: false,
            description: 'Chihuahuas are the smallest breed recognized by some kennel clubs. There are two varieties of Chihuahua – the Smooth Coat (smooth-haired) and the Long Coat (long-haired). The Kennel Club considers the two to be distinct breeds; mating between the two are not eligible for KC registration. Both the Smooth and Long Coats have their special attractions and are equally easy to keep clean and well-groomed.[7] The term smooth coat does not mean that the hair is necessarily smooth, as the hair can range from having a velvet touch to a whiskery feel. Longhaired Chihuahuas are actually smoother to the touch, having soft, fine-guard hairs and a downy undercoat, which gives them their fluffy appearance. Unlike many longhaired breeds, longhaired Chihuahuas require no trimming and minimal grooming. Contrary to popular belief, the longhaired breed also typically sheds less than its shorthaired counterparts. It may take up to three or more years before a full longhaired coat develops. Current breed standards defined by registries specify an "apple-head" or "apple-dome" skull conformation.[8] Chihuahuas have large, round eyes and large, erect ears, set in a high, dramatically rounded skull.[6] The stop is well defined, forming a near 90 degree angle where the muzzle meets the skull.[9] Dogs of the older "deer" type, with a flat-topped head, more widely set eyes, larger ears, and longer, more slender legs, may still be registered. Breed standards for this dog do not generally specify a height; only a weight and a description of their overall proportions. Generally, the height ranges between 6 and 9 in (15 and 23 cm);[6] however, some dogs grow as tall as 30 to 38 cm (12 to 15 in). Both British and American breed standards state that a Chihuahua must not weigh more than 5.9 lb (2.7 kg) for conformation. However, the British standard also states that a weight of 4–6 lb (1.8–2.7 kg) is preferred. A clause stating, "if two dogs are equally good in type, the more diminutive one is preferred" was removed in 2009.[10] The Fédération Cynologique Internationale standard calls for dogs ideally between 1.5 and 3.0 kg (3.3 and 6.6 lbs), although smaller ones are acceptable in the show ring. Pet Chihuahuas (those bred or purchased as companions rather than show dogs) often range above these weights, even above 10 lbs, if they have large bone structures or are allowed to become overweight.[6] This does not mean that they are not purebred Chihuahuas; they just do not meet the requirements to enter a conformation show. Oversized Chihuahuas are seen in some of the best, and worst, bloodlines. Chihuahuas do not breed true for size, and puppies from the same litter can mature in drastically different sizes from one another. Also, larger breeding females are less likely to experience dystocia (obstructed labour). Many breeders try to breed Chihuahuas as small as possible, because those marketed as "teacup" or "tiny teacup" demand higher prices. Chihuahuas occur in virtually any color combination, from solid to marked or splashed,[13] allowing for colors from solid black to solid white, spotted, sabled, or a variety of other colors and patterns. Colors and patterns can combine and affect each other, resulting in a very high degree of variation. Common colors are fawn, red, cream, chocolate, brown, mixed, white, and black. No color or pattern is considered more valuable than another.The Fédération Cynologique Internationale, which represents the major kennel clubs of 84 countries, disqualified the merle coat pattern, which appears mottled.[11] In May 2007, The Kennel Club decided not to register puppies with this coloration due to the health risks associated with the responsible gene, and in December of that year, formally amended its breed standard to disqualify merle dogs. Like many other small dogs, the Chihuahua may display above-average aggression towards people and other dogs.'
        },
        {
            id: 3,
            type: 0,
            name: 'Husky',
            img: 'https://sieupet.com/sites/default/files/pictures/images/cho-Husky.jpg',
            liked: false,
            description: 'A husky is a sled dog used in the polar regions. One can differentiate huskies from other dog types by their fast pulling-style.[citation needed] When used as a sled dog, they represent an ever-changing crossbreed of the fastest dogs[1] (the Alaskan Malamute, by contrast, pulled heavier loads at a slower speed).[2] Humans use huskies in sled-dog racing. Various companies have marketed tourist treks with dog sledges for adventure travelers in snow regions.[3] Huskies are also kept as pets, and groups work to find new pet homes for retired racing and adventure-trekking dogs. Huskies are energetic and athletic. They usually have a thick double coat that can be gray, black, copper red, or white.[9] The double coat generally protects huskies against harsh winters and, contrary to what most believe, they can survive in hotter climates. During the hotter climates, huskies tend to shed their undercoat regularly to cool their bodies. In addition to shedding, huskies control their eating habits based on the season; in cooler climates, they tend to eat generous amounts, causing their digestion to generate heat, whilst in warmer climates, they eat less.[10] Their eyes are typically pale blue, although they may also be brown, green, blue, yellow, or heterochromic. Huskies are more prone to some degree of uveitis than most other breeds.[11] Hunting instincts can still be found in some of this breed today'
        },
        {
            id: 4,
            type: 0,
            name: 'Alaska',
            img: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/5/1/802529/5-Ly-Do-Thu-Vi-Khien-01.jpg',
            liked: false,
            description: 'The American Kennel Club (AKC) breed standard describes a natural range of size, with a desired size of 23 inches (58 cm) tall and 75 pounds (34 kg) for females, 25 inches (64 cm) tall and 85 pounds (39 kg) for males.[7] Heavier individuals (90 lb (41 kg)) and dogs smaller than 75 pounds (34 kg) are commonly seen. There is often a marked size difference between males and females. Weights upwards of 100 pounds (45 kg) are also seen.'
        },
        {
            id: 5,
            type: 1,
            name: 'Abyssinian',
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Abyssinian_cat_-_Patricia.jpg',
            liked: false,
            description: 'The Abyssinian is a breed of domestic short-haired cat with a distinctive "ticked" tabby coat, in which individual hairs are banded with different colors.[2] In nomenclature terms, they are also known as simply Abys.[3] The breed is named for Abyssinia (now called Ethiopia), where it is believed to have originated. The Abyssinian is a slender, fine-boned, medium-sized cat. The head is moderately wedge-shaped, with a slight break at the muzzle, and nose and chin ideally forming a straight vertical line when viewed in profile. They have alert, relatively large pointed ears. The eyes are almond-shaped and are gold, green, hazel or copper depending on coat color. The legs tend to be long in proportion to a graceful body, with small oval paws; the tail is likewise long and tapering.'
        },
        {
            id: 6,
            type: 0,
            name: 'Poodle',
            img: 'https://sieupet.com/sites/default/files/5_2_0.jpg',
            liked: false,
            description: 'The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle variety is not universally recognised. The Poodle is most commonly claimed to have been developed in Germany, although it is also claimed to be from France, the Standard Poodle was originally used by wildfowl hunters to retrieve game from water. The smaller varieties of the breed were bred from the original in France where they were once commonly used as circus performers, but have become popular companion dogs.'
        },
        {
            id: 7,
            type: 0,
            name: 'Corgi',
            img: 'https://agrion.vn/content/uploads/photos/2019/11/beta_baa5c38d3aa2d12cf327a7d9c6b1204c.jpg',
            liked: false,
            description: 'The Pembroke Welsh Corgi  is a herding dog breed, which originated in Pembrokeshire, Wales. It is one of two breeds known as Welsh Corgi: the other is the Cardigan Welsh Corgi. The Pembroke Welsh Corgi is the younger of the two Corgi breeds and is a separate and distinct breed from the Cardigan. This breed is also a mix of the Canterbury Welsh Corgi. The corgi is one of the smallest dogs in the Herding Group. Pembroke Welsh Corgis are famed for being the preferred breed of Queen Elizabeth II, who has owned more than 30 during her reign. These dogs have been favored by British royalty for more than seventy years.'
        },
        {
            id: 8,
            type: 1,
            name: 'Birman',
            img: 'https://vuonpet.com/wp-content/gallery/birman/anh-meo-birman-2.jpg',
            liked: false,
            description: 'The Birman is a domestic cat breed. Also called the "Sacred Cat of Burma",[1] it is not to be confused with the Burmese, which is a separate and dissimilar breed. The Birman has medium-long hair, a pale colored body and darker points with deep blue eyes. Even though the cat is pointed, the paws have white gloves. Birmans have semi-long, silky hair, a semi-cobby body and relatively small ears compared to other cat races and a Roman nose. In order to comply with breed standards, the Birman"s body should be of an eggshell colour or golden, depending on the intensity of the markings colour. The markings can be pure seal, chocolate, blue, red, lilac or cream. Tabby variations are also allowed. Tortie cats can be seal, chocolate, blue or lilac. Birmans have sapphire coloured eyes. The Birmans coat is unusual due to the white gloves on each paw. They are one of the few cat breeds in the colourpoint coat that has fingers and toes in pure white colour. The genetics of this feature may not be not fully clear, though a gene conferring the white gloves has been identified.'
        },
        {
            id: 9,
            type: 0,
            name: 'Pug',
            img: 'https://tunglocpet.com/wp-content/uploads/2017/07/ban_cho_pug_con_01.jpg',
            liked: false,
            description: 'The Pug is often described as a lot of dog in a small space. These sturdy, compact dogs are a part of the American Kennel Club’s Toy group, and are known as the clowns of the canine world because they have a great sense of humor and like to show off. Originally bred to be lap dogs, Pugs thrive on human companionship. They’re highly sensitive, and though they can make for great apartment pets, they will not appreciate being left home alone for long hours of the day. Although these pups have a stubborn side, especially when it comes to house training, they’re playful, affectionate dogs who will get along well even with novice pet parents. If you’re looking for a loving, easygoing pal, this may be the breed for you!'
        },
        {
            id: 10,
            type: 0,
            name: 'Pitpull',
            img: 'https://thucanh.vn/wp-content/uploads/2018/05/cho-pitbull-1.jpg',
            liked: false,
            description: 'Pit bull is a term used in the United States for a type of dog descended from bulldogs and terriers, while in other countries such as the United Kingdom the term is used as an abbreviation of the American Pit Bull Terrier breed.[1][2][3] The term was first used in 1927.[3] Within the United States the pit bull is usually considered a heterogeneous grouping that includes the breeds American Pit Bull Terrier, American Staffordshire Terrier, American Bully, Staffordshire Bull Terrier and occasionally the American Bulldog, along with any crossbred dog that shares certain physical characteristics with these breeds. In other countries including Britain, the Staffordshire Bull Terrier is not considered a pit bull.[1][4][5] Most pit bull-type dogs descend from the British Bull and terrier, a 19th century dog-fighting type developed from crosses between the Old English Bulldog and the Old English Terrier. Pit bull-type dogs have a controversial reputation as pets both in the United States and internationally, due to their history in dog fighting, the number of high-profile attacks documented in the media over decades, and their proclivity to latching on while biting.[9] Proponents of the breed and advocates of regulation have engaged in a nature-versus-nurture debate over whether apparent aggressive tendencies in pit bulls may be appropriately attributed to owners care for the dog or inherent qualities.[10] Numerous advocacy organizations have sprung up in defense of the pit bull. A number of controlled studies have argued that the type is not disproportionately dangerous, offering competing interpretations on dog bite statistics. Independent organizations have published statistics based on hospital records showing pit bulls are responsible for more than half of dog bite incidents among all breeds despite comprising 6% of pet dogs.'
        },
        {
            id: 11,
            type: 1,
            name: 'American Bobtail',
            img: 'https://1.bp.blogspot.com/-dKommJG2rkE/X9ewmd9ZhoI/AAAAAAAAAFc/TuVq4HJx3TspXX4smC3QjuZaf-IbaY4WwCLcBGAsYHQ/s16000/093e15425b119c096bf4c1b2993d9efb5f9174c0.jpeg',
            liked: false,
            description: 'The American Bobtail is an uncommon breed of domestic cat which was developed in the late 1960s.[1] It is most notable for its stubby "bobbed" tail about one-third to one-half the length of a normal cat"s tail. This is the result of a cat body type genetic mutation affecting the tail development, similar to that of a Manx cat.[1] The breed is not related to the Japanese Bobtail despite the similar name and physical type—the breeding programs are entirely unrelated, and the genetic mutation causing the bobbed tail are known to be different because the mutation causing the American Bobtails tail is dominant, whereas the Japanese Bobtail tail mutation is recessive. '
        },
        {
            id: 12,
            type: 1,
            name: 'Bombay',
            img: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/burmese-card-medium.jpg?bust=1535569899',
            liked: false,
            description: 'The Bombay cat breed is a type of short-haired cats developed by breeding sable Burmese and black American Shorthair cats, to produce a cat of mostly Burmese type, but with a sleek, panther-like black coat.'
        },
        {
            id: 13,
            type: 0,
            name: 'American Foxhound',
            img: 'https://bowwowinsurance.com.au/wp-content/uploads/2021/02/shutterstock_1444833281-American-Foxhound-in-a-public-park-thumbnail-Bow-Wow-Meow-Pet-Insurance.jpg',
            liked: false,
            description: 'The American Foxhound is slighter of bone and higher on leg that the English Foxhound, with more rear angulation and arch over the loin. These attributes allow greater speed and agility over rough terrain. The American Foxhound has a melodious voice when on the trail. The coat is hard and of medium length. The expression is gentle and pleading. Although by tradition the Foxhound was not a house pet, this dog is well mannered in the home. Foxhounds get along best with human or canine companionship. They are tolerant, amiable, and gentle dogs, even though they are not very demonstrative. Most are reserved with strangers. This dog needs daily exercise in a safe area. Once on a scent, the Foxhound will follow gleefully, heedless of commands. This is a dog that bays and likes the outdoors, and is not usually defined as a city dog.'
        },
        {
            id: 14,
            type: 0,
            name: 'American Eskimo',
            img: 'https://vuongquocloaivat.com/wp-content/uploads/2018/09/cho-american-eskimo.jpg',
            liked: false,
            description: 'Called “the dog beautiful” by admirers, the American Eskimo Dog, or “Eskie,” is a striking canine with their white coat, sweet expression, and black eyes. They’re a Nordic dog breed, a member of the Spitz family. Even though these are purebred dogs, you may find them in the care of shelters or rescue groups. Remember to adopt! Don’t shop if you want to bring a dog home. Eskies are lively, active companion dogs who love to entertain and join in on all family activities. They’re outgoing and friendly with family and friends, but reserved with strangers. Although the Eskie is a small dog — 10 to 30 pounds — they have a big-dog attitude.'
        },
        {
            id: 15,
            type: 0,
            name: 'Appenzeller Sennenhunde',
            img: 'https://einfachtierisch.de/media/cache/article_main_image/cms/2016/12/Appenzeller-Sennenhund-MyImages-Micha-Shutterstock-306804173.jpg?266705',
            liked: false,
            description: 'The Appenzeller Sennenhund is a medium-sized dog, 18.5-23 ins (47–58 cm) at the withers and weighing 49-71 lbs (22–32 kg). Like the other Sennenhunds, the Appenzeller Sennenhund has a heavy build and a distinctive tricolour coat. The breeds ears are small and triangular, set high and hanging down against the dogs cheeks, similar to a button ear. Faults in the breeds appearance include wall eye, kinked tail, a single coat, and a coat that is not tricolour.'
        },
        {
            id: 16,
            type: 0,
            name: 'Golden Retriever',
            img: 'https://bompets.com/wp-content/uploads/2021/01/cho-golden-retriever-2-413x400.jpg',
            liked: false,
            description: 'The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl such as ducks and upland game birds during hunting and shooting parties,[1] and were named "retriever" because of their ability to retrieve shot game undamaged. Golden Retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards. They are a long-coated breed, with a dense inner coat that provides them with adequate warmth in the outdoors, and an outer coat that lies flat against their bodies and repels water. Golden Retrievers are well suited to residency in suburban or country environments. Although they need substantial outdoor exercise, they should be housed in a fenced area because of their instinctual tendency to roam.[2] They shed copiously, particularly at the change of seasons, and require fairly regular grooming. '
        },
        {
            id: 17,
            type: 0,
            name: 'German Shepherd',
            img: 'https://dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg',
            liked: false,
            description: 'The German Shepherd Dog is one of America’s most popular dog breeds — for good reasons. They’re intelligent and capable working dogs. Their devotion and courage are unmatched. And they’re amazingly versatile. GSDs excel at most anything they’re trained to do: guide and assistance work for the handicapped, police and military service, herding, search and rescue, drug detection, competitive obedience, and — last but not least — faithful companion.'
        },
        {
            id: 18,
            type: 0,
            name: 'Beagle',
            img: 'http://file.hstatic.net/1000238938/file/beagle_e42519e11ec64c208e57e0b9dbf4487d_grande.jpg',
            liked: false,
            description: 'Beagles have been depicted in popular culture since Elizabethan times in both literature and painting, and more recently in movies, comics, and television. Snoopy, one of the main characters in the Peanuts comic strip, is often cited as "the most famous beagle in the world." The beagle is mournful and playful, and makes a wonderful family pet. He is an affectionate, yet calm dog who loves everyone, and is excellent with children and with others dogs. He needs to be raised as a puppy with non-dog pets in order to get along with them. He loves company, and although at first reserved with strangers will quickly warm up to them. This makes him only a moderately good watchdog, since he will bark for a stranger at the door, but then quickly make friends! He loves the outdoors, but shouldnt be left alone in a fenced yard. He can bark and howl when lonely. Its better to keep him inside when youre away from home. He loves to roam and to sniff. He doesnt have a doggy odor like some breeds and he doesnt drool. For walks, he should be kept on a leash to avoid his sniffing and running off to hunt after interesting smells. Because of his energy and stamina he makes a great walking, jogging, and hiking companion. He can be single-minded about his sniffing, and a bit stubborn, and therefore is difficult to train. He can also be hard to housebreak, a little slow to catch on at first. He loves to sniff out food, so its best not leave food sitting unattended on a countertop. He can live in the city or in the country, and in an apartment without a yard if walked daily. He is a medium shedder so he will leave quite a bit of hair around your home.'
        },
        {
            id: 19,
            type: 2,
            name: 'Eclectus',
            img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Eclectus_roratus-20030511.jpg',
            liked: false,
            description: 'Eclectus parrots come in a variety of sub-species, including the Grand Eclectus, the Vosmaeri, and the Solomon Island Eclectus (Eclectus roratus solomonensis) which is the most commonly found Eclectus in captivity. Originating in the Solomon Islands, this bird is prized for its stunning appearance and great pet quality. A little harder to find than some of the other parrots of this size, the Solomon is easily recognizable once you do find one — you can’t miss an Eclectus! Their feathers do not have a distinct outline like the feathers of other birds; Eclectus parrots look as if they are covered with a fine fur, and along with their day-glow colors, the effect is astounding.'
        },
        {
            id: 20,
            type: 2,
            name: 'Umbrella Cockatoo',
            img: 'https://i.pinimg.com/originals/f7/f5/bb/f7f5bb6e7004cea84efa90d8908c7fdb.jpg',
            liked: false,
            description: 'Umbrella cockatoos are popular for doing tricks, making them delightfully entertaining companions for bird lovers. A sweet-natured species, umbrella cockatoos can be overly affectionate—bordering on obsessive—with their caretakers. These birds may require more attention and care than many other species, but they make up for it with their comical charm. Just as with any bird, however, prospective owners should be sure that they can meet the needs of an umbrella cockatoo before acquiring one.'
        },
        {
            id: 21,
            type: 2,
            name: 'Blue-and-Gold Macaw',
            img: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2017-11/0qNtddiaSo.jpg',
            liked: false,
            description: 'The blue-and-gold macaw is aptly named, with a gorgeous blue body and dark lemon-yellow chest, this is a bird that’s hard to miss. It also referred to as the blue-and-yellow macaw. This macaw has a green strip of feathers just above its black beak, and a partially naked face that will blush pink when it is excited. Its feet are dark gray or black, and it has a black “beard” of feathers just below its beak.'
        },
        {
            id: 22,
            type: 1,
            name: 'British Shorthair',
            img: 'https://cdn.britannica.com/q:60/92/181392-050-08187DB5/cat-British-Shorthair-grey.jpg',
            liked: false,
            description: 'The British Shorthair is a study in roundness. He has a large round head, round eyes and rounded paws. Even his tail has a rounded tip. He was once known as the British Blue because he came only in that color, but these days his short, plush coat comes in many different colors and patterns. There is also a longhaired variety, called the British Longhair. Except for his coat, the British Longhair is the same as the British Shorthair. A British Shorthair is a dignified, intelligent and affectionate companion. He’s not generally a lapcat, but he will want to be at your side on the sofa or at least nearby. Females tend to have a serious demeanor, while males are more happy-go-lucky. These laidback cats can get along well with dogs and are calm around children, but they don’t enjoy being hauled around. Teach children to treat them with respect.'
        },
        {
            id: 23,
            type: 1,
            name: 'Persian',
            img: 'https://cdn.britannica.com/q:60/47/168047-050-874ABD37/cat-hair-growl-teeth-snarl.jpg',
            liked: false,
            description: 'The Persian is the most popular pedigreed cat in North America, if not the world. He first came into vogue during the Victorian era, but he existed long before then. Little is known about his early history, though.The Persian comes in two types: show and traditional. The show Persian has a round head enhanced with a thick ruff, small ears, a flat nose, big round copper eyes, a broad, short body with heavy boning atop short tree-trunk legs, and a thick, flowing plume of a tail. The traditional Persian, also known as the Doll Face, does not have the extreme features of the show Persian, and his nose is a normal length, giving him a sweet expression. Both types have a long, glamorous coat that comes in many colors and patterns, and both share the same wonderful personality.'
        },
        {
            id: 24,
            type: 2,
            name: 'Dwarf Roborovski',
            img: 'https://www.thesprucepets.com/thmb/jnfvnG0Z8e-iUAY_iQ5I5ADt4Aw=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1157798585-41025aa3b70f4615b234fd9fb30d7d1b.jpg',
            liked: false,
            description: 'Dwarf Roborovski hamsters are curious beings that dont like to be held They are content to socialize with their own kind while you watch from outside their home. Roborovski hamsters are nocturnal so they usually wake at dusk and are active at night. They are generally gentle and rarely nip but they are very fast and agile which makes handling them difficult. It is advisable to handle them in an area where they will be easy to catch if they get away (over a large box, for example). While your hamster is happiest if you just drop in the treats with food, it can be trained to take treats from your hand. Gently rest your hand, palm up, with the treat in your fingers. Natural curiosity will do the rest. '
        },
        {
            id: 25,
            type: 2,
            name: 'Syrian (Golden) Hamster',
            img: 'https://www.thesprucepets.com/thmb/bTrscdxxz1RNO7qlidG6SecWK8U=/2119x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-525140239-8808998be45e4bfa9140ae9dbcfe2d79.jpg',
            liked: false,
            description: 'The Syrian hamster, also known as the golden hamster, is among the most popular choices for small pets. Its generally easy to tame, fun to watch, and fairly low-maintenance, making it a good pet for beginners. These hamsters come from arid regions of northern Syria and southern Turkey. The natural color of most Syrian hamsters is golden brown with a lighter belly. But selective breeding has given rise to several variations in color, pattern, and hair length.'
        }
    ]

    getData(): Array<Product> {
        return this.data;
    }

    updateLiked(item : Product): void {
        this.data[item.id] = {
            ...item,
            liked: !item.liked
        }
    }

    add(item: Product): void {
        this.data.push(item);
    }

    update(id: number, item: Product): void {
        this.data[id] = item;
    }

    remove(id: number): void {
        this.data = this.data.filter(item => item.id != id);
    }

    findById(id: number): Product {
        const temp = this.data.filter(i => i.id == id);
        if (temp.length > 0) return temp[0];
        throw new Error('id not existed');
    }
}

export const productDB: ProductsDB = new ProductsDB();