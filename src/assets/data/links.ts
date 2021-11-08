interface SectionPathInformation {
  label: string;
  path: string;
  hash: string;
}

const sections: SectionPathInformation[] = [
  { label: "home", path: "/#home", hash: "#home" },
  { label: "about", path: "/#about", hash: "#about" },
  { label: "projects", path: "/#projects", hash: "#projects" },
  { label: "contact", path: "/#contact", hash: "#contact" },
];

export default sections