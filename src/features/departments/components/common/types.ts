export interface Course {
  name: string;
  credits: number;
}

export interface Elective {
  title: string;
  credits: number;
  options: string[];
}

export interface Track {
  title: string;
  courses: Course[];
}

export interface Semester {
  title: string;
  courses?: Course[];
  electives?: Elective;
  compulsory?: {
    title: string;
    courses: Course[];
  };
  specializations?: {
    [key: string]: {
      title: string;
      semester7?: {
        title: string;
        courses: Course[];
      };
      semester8?: {
        title: string;
        courses: Course[];
      };
    };
  };
}

export interface LearningProgramData {
  [key: string]: Semester;
}
