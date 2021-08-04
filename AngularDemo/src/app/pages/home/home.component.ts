import { Component, OnInit } from '@angular/core';

type FakeData = Array<{
  title: string,
  content: string,
}>

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  selected: number = 0;
  data : FakeData = [
    {
      title: 'The Flight',
      content: 'Flight is a 2012 American drama film directed by Robert Zemeckis, written by John Gatins and produced by Walter F. Parkes, Laurie MacDonald, Steve Starkey, Zemeckis and Jack Rapke. It stars Denzel Washington as William "Whip" Whitaker Sr., an alcoholic airline pilot who miraculously crash-lands his plane after a mechanical failure, saving nearly everyone on board. Immediately following the crash, he is hailed a hero but an investigation soon leads to questions that put the captain in a different light. This film is loosely inspired by the plane crash of Alaska Airlines Flight 261.',
    },
    {
      title: 'The City',
      content: 'Chania is the capital of the Chania region on the island of Crete. The city can be divided into two parts, the old town and the modern city. It lies along the north west coast of the island Crete, about 70 km (43 mi) west of Rethymno and 145 km (90 mi) west of Heraklion. The municipality has 108,642 inhabitants (2011). This consists of the city of Chania and several nearby areas, including Kounoupidiana (pop. 8,620), Mournies (pop. 7,614), Souda (pop. 6,418), Nerokouros (pop. 5,531), Daratsos (pop. 4,732), Perivolia (pop. 3,986), Galatas (pop. 3,166) and Aroni (pop. 3,003).',
    },
    {
      title: 'The Island',
      content: 'The Island is a 2005 American science fiction thriller film directed and co-produced by Michael Bay. It stars Ewan McGregor, Scarlett Johansson, Djimon Hounsou, Sean Bean, Michael Clarke Duncan and Steve Buscemi. The film is about Lincoln Six Echo (McGregor), who struggles to fit into the highly structured world in which he lives, isolated in a compound, and the series of events that unfold when he questions how truthful that world is. After Lincoln learns the compound inhabitants are clones used for organ harvesting as well as surrogates for wealthy people in the outside world, he attempts to escape with Jordan Two Delta (Johansson) and expose the illegal cloning movement.',
    },
    {
      title: 'The Food',
      content: 'The food system has significant impacts on a wide range of other social and political issues including: sustainability, biological diversity, economics, population growth, water supply, and access to food. The right to food is a human right derived from the International Covenant on Economic, Social and Cultural Rights (ICESCR), recognizing the "right to an adequate standard of living, including adequate food", as well as the "fundamental right to be free from hunger". Because of these fundamental rights, food security is often a priority international policy activity; for example Sustainable Development Goal 2 "Zero hunger" is meant to eliminate hunger by 2030. Food safety and food security are monitored by international agencies like the International Association for Food Protection, World Resources Institute, World Food Programme, Food and Agriculture Organization, and International Food Information Council, and are often subject to national regulation by institutions, like the Food and Drug Administration in the United States.',
    },
  ];

  constructor() {
    
  }

  ngOnInit(): void {
  }

  onClick(id: number) : void {
    this.selected = id;
  }

}
