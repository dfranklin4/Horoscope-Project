var zodiac = [
	{
		sign: "aquarius",
		fortune: "The Aquarius is a hippie elitist. They think they're the special snowflake of the bunch, constantly looking down their noses at every other Zodiac because they're so basic, man. The funny thing is, their entire lives are dedicated to the pursuit of being unique, so that tends to make them especially boring. They don't realize how boring they are until their bodies are glittered with Chinese symbol tattoos and their Hybrids are covered with every stereotypical progressive bumper sticker there is. In sum, the Aquarius is an asshole; and they like the smell of their farts so much that everything else ends up smelling bad.",
		image: "img/aquarius.jpg"
	},
	{
		sign: "aries",
		fortune: "They like to throw hissy fits when things don't go their way. This tends to make everyone think they have a dominant personality, because their tantrum is especially loud and domineering, but in reality, it's only a tantrum. They usually only need a hit of bitty and maybe some warm milk and a nap.",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "Remember that kid in high school who wallowed in sorrow and liked to cry in the bathroom? Well, he was probably a Cancer. They retreat to their little crab shells when they get their wittle feewings hurt, which happens a lot, and usually explodes in a Columbine-like fashion in time.Nobody likes them. They're sad.",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		fortune: "You try to get them to come out of their shell and hang, but they're painfully shy. They usually shuffle away awkwardly and do paperwork. Everyone in the office makes jokes about it.Finally, after months of persistence, the Capricorn gets the balls to hang out. You plan to get drinks. You order drinks from the bar and sit. Nothing. Uh oh. The Capricorn ordered fish sticks and tonic water. This is weird. You realize that you should have never invited him out because there was a reason they didn't want to. They're nothings in the personality department.",
		image: "img/cvapricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: "A prototypical Gemini has a dual personality. On one hand he fancies himself a genius voice of his generation, and on the other hes a complete moron. One is these ends up being the truth.Wily and unpredictable, the Gemini loves to make people around them uncomfortable. They have zero tact, grace, or concept of self-awareness. Cough, Mike Myers. Cough, Taylor Swift.",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "Leos are disgustingly vain creatures. They demand constant attention, or else they wither away and die. Oftentimes the Leo has a crack team of sycophants just for that purpose, whom he employs to pat his ego and sometimes do his laundry. The Leo thinks he's just being a great friend, because it's a gift to be around him, when in reality his little minions simply hate themselves. If you call out a Leo's bed hair, they will put you on their shit list for life.",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune:"Libras are flirtatious to a fault. This often attracts pigs. They will then undergo serious, lengthy relationships with said pigs and never leave because they're too indecisive and don't have the sack.And they're lazy. Even lazier than the Virgo. They love nothing more than sleeping in till 1 PM and spending the day in bed. They may get up to go to the bathroom or fetch the laptop to masturbate, but that's generally it.",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune:"The Pisces can't take a joke. They're overly sensitive and tend to get triggered all too often. You know the type. They're the ones that heckle at comedy shows when the comedian tells an offensive joke. They then go home and write a blog about it. It's fitting that they're represented by the fish, because they're slimy and cold-blooded. If you know a Pisces, always walk on eggshells because you're going to make them pout with a sarcastic joke or a harmless jab.",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune:"Famous Saggitarians: Miley Cyrus, Britney Spears, Nikki Minaj. The one thing in common? Obnoxiousness.When Miley twerked like a little white idiot, when Britney shaved her head and went batty, and when Nikki wrote Truffle Butter, these were the choices of a Sagittarius. Reckless and stupid.The Sagittarius is also fond of saying, I'm not religious, I'm spiritual. Which is obnoxious in its own right.",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune:"Butters from South Park is the perfect Scorpio. Everyone knows him as the innocent little scamp who wouldn't harm a fly, but on the inside is an alternate ego: Professor Chaos. Yes, the Scorpio may be a little dweebish, sad, and pathetic on the outside, but they're quite the vindictive sociopath on the inside. You will never know if they're plotting to kill you. Best to avoid them.",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune:"Metrosexual. Materialistic. Money whore. The Taurus can be found at all hours of the day standing in front of a mirror trying to catch slight imperfections. They will then apply a new-to-the-market topical cream to address those blemishes. Once perfect, the Taurus will attend a nightclub and buy a fruity drink and sip, while scoffing at his lessers and their crappy fashion choices.They are exceptionally boring people.",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune:"The Virgo is one lazy bastard. But not in the traditional sense. While it may seem like they're wasting away on the couch eating Pringles and masturbating for months at a time, they're actually making plans. They're meticulous and patient, and they will spend years if necessary analyzing the pros and cons, weighing the benefits, and perfecting the strategy, of getting off their fucking asses and into a cubicle. They're also racist.",
		image: "img/virgo.jpg"
	}
]

function horoscope() {
	var sign = document.getElementById("sign").value
	console.log(sign)
	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").setAttribute("src", zodiac[i].image)
			document.getElementById("yourHoroscope").innerHTML = "This is the real you: " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try again!"
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}