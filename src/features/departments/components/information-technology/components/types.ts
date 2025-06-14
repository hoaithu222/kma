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
  compulsory?: Track;
  embeddedTrack?: Track;
  mobileTrack?: Track;
}

export interface LearningProgramData {
  [key: string]: Semester;
}
