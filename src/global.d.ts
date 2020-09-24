interface ModuleObject {
  name: string;
  title: string;
  url: string;
  children?: ModuleObject[];
}
