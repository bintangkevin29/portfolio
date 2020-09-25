export interface ModuleObject {
  name: string;
  title: string;
  url: string;
  children?: ModuleObject[];
}

export interface Portfolio {
  description: string;
  githubUrl: string;
  imageUrl: string;
  libraryFramework: string;
  name: string;
  role: string;
  url: string;
  year: number;
}
