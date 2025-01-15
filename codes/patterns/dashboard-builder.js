class DashboardBuilder {
  constructor() {
    this.widgets = [];
  }

  addChart(type, data) {
    this.widgets.push({ type: 'chart', chartType: type, data });
    return this;
  }

  addTable(data) {
    this.widgets.push({ type: 'table', data });
    return this;
  }

  addNotification(message) {
    this.widgets.push({ type: 'notification', message });
    return this;
  }

  build() {
    return new Dashboard(this);
  }
}

class Dashboard {
  constructor(builder) {
    this.widgets = builder.widgets;
  }

  render() {
    this.widgets.forEach(widget => {
      switch (widget.type) {
        case 'chart':
          console.log(`Rendering a ${widget.chartType} chart with data:`, widget.data);
          break;
        case 'table':
          console.log('Rendering a table with data:', widget.data);
          break;
        case 'notification':
          console.log('Showing notification:', widget.message);
          break;
        default:
          console.log('Unknown widget type');
      }
    });
  }
}

// Usage
const dashboard = new DashboardBuilder()
  .addChart('line', [1, 2, 3])
  .addChart('bar', [1, 2, 3])
  .addTable({ header: ['Name', 'Age'], rows: [['Alice', 30], ['Bob', 25]] })
  .addNotification('Welcome to your dashboard!')
  .build();

dashboard.render();
