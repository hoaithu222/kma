export interface Course {
  name: string;
  credits: number;
}

export interface Elective {
  title: string;
  credits: number;
  options: string[];
}

export interface Semester {
  title: string;
  courses?: Course[];
  electives?: Elective;
  compulsory?: {
    title: string;
    courses: Course[];
  };
  embeddedTrack?: {
    title: string;
    courses: Course[];
  };
  mobileTrack?: {
    title: string;
    courses: Course[];
  };
}

export interface LearningProgramData {
  [key: string]: Semester;
}
