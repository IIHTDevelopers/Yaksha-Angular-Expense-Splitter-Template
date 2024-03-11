import { Component } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-expense-splitter',
  templateUrl: './expense-splitter.component.html',
  styleUrls: ['./expense-splitter.component.css']
})
export class ExpenseSplitterComponent {
  members: Member[] = [];
  expenses: Expense[] = [];
  settlements: any[] = [];
  newMemberName: string = '';
  newExpenseAmount: number | null = null;
  paidBy: string = '';
  splitAmong: string[] = [];
  totalExpenses: number = 0;
  expensesByMember: { [key: string]: number } = {};

  constructor() { }

  addMember(name: string): void {
    // write your logic here
  }

  addExpense(amount: number | null, paidBy: string, splitAmong: string[]): void {
    // write your logic here
  }

  onMemberSelectionChange(memberName: string, isChecked: boolean): void {
    // write your logic here
  }

  calculateSettlements(): void {
    // write your logic here
  }
}