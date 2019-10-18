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
  },
  {
    name: "The Considition",
    location: Locations.SWEDEN,
    url: "https://theconsidition.se",
    type: Types.HACKATHON,
    labels: [Labels.UX, Labels.BACKEND, Labels.FRONTEND, Labels.SOCIAL_AWARENESS]
  },
  {
    name: "Hack For Sweden",
    location: Locations.ALMEDALEN,
    url: "https://hackforsweden.se",
    type: Types.HACKATHON,
    labels: [Labels.UX, Labels.BACKEND, Labels.FRONTEND, Labels.SOCIAL_AWARENESS]
  },
  {
    name: "Advent of Code",
    location: Locations.ONLINE,
    url: "https://adventofcode.com",
    type: Types.OTHER,
    labels: [Labels.PROBLEM_SOLVING]
  },
  {
    name: "Hacktoberfest",
    location: Locations.ONLINE,
    url: "https://hacktoberfest.digitalocean.com",
    type: Types.OTHER,
    labels: [Labels.PROBLEM_SOLVING, Labels.OPEN_SOURCE]
  },
];

export default events;
