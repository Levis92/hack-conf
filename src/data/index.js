import enums from "./enums";
const { Types, Labels, Locations } = enums;

const events = [
  {
    name: "Gothenburg Startup Hack",
    location: Locations.GOTHENBURG,
    url: "http://www.gbgstartuphack.com",
    type: Types.HACKATHON,
    labels: [Labels.BACKEND, Labels.FRONTEND, Labels.UX]
  },
  {
    name: "The UX Conference",
    location: Locations.LONDON,
    url: "https://theuxconf.com",
    type: Types.CONFERENCE,
    labels: [Labels.UX]
  },
  {
    name: "#NowWhat Hackathon",
    location: Locations.STOCKHOLM,
    url: "https://nowwhathacks.confetti.events",
    type: Types.HACKATHON,
    labels: [
      Labels.BACKEND,
      Labels.FRONTEND,
      Labels.UX,
      Labels.SOCIAL_AWARENESS,
      Labels.FEMINISM
    ]
  },
  {
    name: "Sustainable UX",
    location: Locations.ONLINE,
    url: "https://sustainableux.com",
    type: Types.CONFERENCE,
    labels: [Labels.UX, Labels.SOCIAL_AWARENESS, Labels.CLIMATE]
  },
  {
    name: "UX Hong Kong",
    location: Locations.HONGKONG,
    url: "http://uxhongkong.com",
    type: Types.CONFERENCE,
    labels: [Labels.UX]
  }
];

export default events;
