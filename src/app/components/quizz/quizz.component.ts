import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizz_questions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  description: string = '';
  questios: any;
  questionSelected: any;
  questionIndex: number = 0;
  questionIndexMax: number = 0;
  answers: string[] = [];
  answersSelected: any;
  finished: boolean = false;

  constructor() {}

  ngOnInit() {
    if (quizz_questions) {
      this.description = quizz_questions.description;
      this.questios = quizz_questions.questions;
      this.questionIndexMax = this.questios.length;
      this.questionSelected = this.questios[this.questionIndex];
    }
  }

  selectOption(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex += 1;
    if (this.questionIndexMax > this.questionIndex) {
      this.questionSelected = this.questios[this.questionIndex];
    } else {
      const finalResult: string = await this.checkResult(this.answers);
      this.finished = true;
      this.answersSelected = quizz_questions.results[finalResult as keyof typeof quizz_questions.results];
    }
  }

  async checkResult(answers: string[]): Promise<string> {
    const result = answers.reduce((prev, curr, i, arr) => {
      if (arr.filter(item => item === prev).length >
        arr.filter(item => item === curr).length) {
        return prev;
      } else {
        return curr;
      }
    });
    return result;
  }
}
