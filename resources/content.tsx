import { About, Blog, Home, NavItem, Organization } from "@/types";

const organization: Organization = {
  name: "Freies Sinfonieorchester",
  role: "an der Rudolf Steiner Schule Berlin",
  email: "kontakt@freies-sinfonieorchester.example",
  location: "Europe/Berlin",
  languages: ["Deutsch"],
  locale: "de",
};

const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: "home" },
  { path: "/konzerte", label: "Konzerte", icon: "calendar" },
  { path: "/mitspielen", label: "Mitspielen", icon: "music" },
  { path: "/orchester", label: "Orchester", icon: "group" },
  { path: "/leitung", label: "Leitung", icon: "person" },
  { path: "/kontakt", label: "Kontakt", icon: "email" },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Freies Sinfonieorchester an der Rudolf Steiner Schule",
  description:
    "Das Freie Sinfonieorchester an der Rudolf Steiner Schule Berlin spielt sinfonische Werke von Haydn bis Mahler unter der Leitung von Julia Prigge.",
  headline: <>Willkommen beim Freien Sinfonieorchester!</>,
  featured: {
    display: false,
    title: <></>,
    href: "/konzerte",
  },
  subline: (
    <>
      Wir – das Freie Sinfonieorchester – spielen sinfonische Werke von Haydn
      bis Mahler. Unser Orchester leiten Julia Prigge als Dirigentin und
      Julia Pérez Gámez als Konzertmeisterin.
    </>
  ),
};

const orchester: About = {
  path: "/orchester",
  label: "Orchester",
  title: "Orchester",
  description:
    "Wir, rund 25 Musizierende, sind bunt gemischt: aus verschiedenen Berufen, Musikschüler, Wiedereinsteiger, Rentner, Musiklehrer & mehr.",
  intro: {
    display: true,
    title: "Wir stellen uns vor",
    description: (
      <>
        Wir, rund 25 Musizierende, sind bunt gemischt: aus verschiedenen
        Berufen, Musikschüler, Wiedereinsteiger, Rentner, Musiklehrer & mehr.
        Uns alle verbindet die Liebe zur Musik.
        <br />
        <br />
        Heimat unseres Orchesters ist die Rudolf Steiner Schule in
        Berlin-Dahlem und dies schon seit über 20 Jahren. Wir proben im
        Musiksaal der Schule. Dort spielen wir auch unsere jährlichen
        Frühjahrs- und Herbstkonzerte. Herzlichen Dank an die Rudolf Steiner
        Schule!
      </>
    ),
  },
  work: {
    display: true,
    title: "Zur Orchestergeschichte",
    experiences: [
      {
        company: "Freies Sinfonieorchester",
        timeframe: "seit 2018",
        role: "unter Julia Prigge, Dirigentin",
        achievements: [
          <>
            Die Zahl der Ehemaligen nahm ab, Musizierende außerhalb der
            Rudolf Steiner Schule kamen dazu – daher der neue Name: Freies
            Sinfonieorchester.
          </>,
          <>
            In jüngster Zeit sind wir ein Mehrgeneration-Orchester geworden.
            Bei unserem Frühjahrskonzert 2026 hatten wir eine Altersspanne
            von 11 bis 85 Jahren!
          </>,
        ],
      },
      {
        company: "Ehemaligenorchester",
        timeframe: "2010 – 2018",
        role: "unter Ingo von Zadow",
        achievements: [
          <>
            In Zeiten ohne Dirigentin oder Dirigent haben wir viel
            Kammermusik gespielt. Wir sind immer drangeblieben, um uns mit
            der Musik zu verbinden – und miteinander durch die Musik.
          </>,
        ],
      },
      {
        company: "Ehemaligenorchester",
        timeframe: "2004 – 2010",
        role: "unter Stefan Meinicke",
        achievements: [
          <>
            Unsere 1. Querflötistin Christine Herrmann-Wewers gründete mit
            anderen Ehemaligen der Rudolf Steiner Schule Berlin-Dahlem das
            „Ehemaligenorchester“ – den Vorgänger unseres heutigen Freien
            Sinfonieorchesters.
          </>,
          <>
            In den ersten Jahren spielten wir ein bis zwei Konzerte jährlich
            in verschiedenen Zehlendorfer Kirchen: viel Klassik wie Mozart,
            Mendelssohn oder Beethoven.
          </>,
        ],
      },
    ],
  },
};

const konzerte: Blog = {
  path: "/konzerte",
  label: "Konzerte",
  title: "Konzerte",
  description:
    "Aktuelle und vergangene Konzerte des Freien Sinfonieorchesters – mit Programm, Terminen und Rückblicken.",
};

export { organization, navItems, home, orchester, konzerte };
