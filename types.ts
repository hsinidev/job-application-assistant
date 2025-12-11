export interface FormData {
  userName: string;
  contactInfo: string;
  cv: string;
  jobPosting: string;
}

export interface ExtractedData {
  contactName: string | null;
  contactEmail: string | null;
  jobTitle: string | null;
  jobID: string | null;
}

export interface OutputData {
  emailTo: string;
  emailSubject: string;
  coverLetter: string;
}