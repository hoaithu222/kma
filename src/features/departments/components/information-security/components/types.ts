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

export interface Specialization {
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
  informationSystemSecurity?: Specialization;
  networkSecurityEngineering?: Specialization;
  secureSoftwareTechnology?: Specialization;
}

export interface LearningProgramData {
  semester1: Semester;
  semester2: Semester;
  semester3: Semester;
  semester4: Semester;
  semester5: Semester;
  semester6: Semester;
  semester7: Semester;
  semester8: Semester;
  semester9: Semester;
}
