import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class Example2Component {

  list = [
    {
      title: 'Clean the house',
      completed: false
    },
    {
      title: 'Take out the thrash',
      completed: true
    },
    {
      title: 'Do the dishes',
      completed: false
    },
    {
      title: 'Feed the dog',
      completed: true
    },
    {
      title: 'Mow the law',
      completed: true
    },
    {
      title: 'Clean the house',
      completed: false
    },
    {
      title: 'Take out the thrash',
      completed: true
    },
    {
      title: 'Do the dishes',
      completed: false
    },
    {
      title: 'Feed the dog',
      completed: true
    },
    {
      title: 'Mow the law',
      completed: true
    },
    {
      title: 'Clean the house',
      completed: false
    },
    {
      title: 'Take out the thrash',
      completed: true
    },
    {
      title: 'Do the dishes',
      completed: false
    },
    {
      title: 'Feed the dog',
      completed: true
    },
    {
      title: 'Mow the law',
      completed: true
    },
    {
      title: 'Clean the house',
      completed: false
    },
    {
      title: 'Have a beer',
      completed: true
    }
  ];

  addItem() {
    this.list = [
      ...this.list, ...[
        {
          title: 'Clean the house',
          completed: false
        }
      ]
    ];
  }
}
