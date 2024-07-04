export interface QuizQuestion {

    question: string;
    type: 'checkbox' | 'radio';
    answers: {
        selected: boolean
        label: string
    }[];
    name: string;

}