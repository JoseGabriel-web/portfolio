interface SectionPathInformation {
  label: string;
  path: string;
  hash?: string;
}

const sections: SectionPathInformation[] = [
  { label: "about", path: "/#about", hash: "#about" },
  { label: "projects", path: "/#projects", hash: "#projects" },
  { label: "contact", path: "/#contact", hash: "#contact" },
];

export default sections