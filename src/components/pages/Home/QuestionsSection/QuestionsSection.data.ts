export interface Question {
  id: number;
  title: string;
  description: string;
  isOpen: boolean;
}

export const data: Question[] = [
  {
    id: 1,
    title: "How to get a tax deduction",
    description:
      "To return part of the money for training at a driving school, you must have permanent registration and official employment. For more information, please contact the Federal Tax Service.",
    isOpen: false
  },
  {
    id: 2,
    title: "How many times a week are classes",
    description:
      "The study schedule is selected individually according to the needs of the student.",
    isOpen: false
  },
  {
    id: 3,
    title: "Where can I get a medical certificate?",
    description:
      "In order to issue a certificate for obtaining or replacing a driver's license, you will need to be examined by a psychiatrist-narcologist and a psychiatrist in narcological and neuropsychiatric clinics in the city of residence.",
    isOpen: false
  },
  {
    id: 4,
    title: "Who is not allowed to drive?",
    description:
      "Driving is hindered by schizophrenia, affective disorders, mental retardation, epilepsy, blindness in both eyes.",
    isOpen: false
  },
  {
    id: 5,
    title: "How much does it cost to retake an exam at a driving school? ",
    description:
      "The cost of retaking the exam varies depending on the category. The price does not exceed 4,000 Rupees.",
    isOpen: false
  }
];
