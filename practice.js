const { program } = require('commander');

try {
  program
    .command('cron', { hidden: true })
    .argument('<arg>')
    .action(function (arg) {
      if (arg) {
        console.log('Hello World!', this.args[0]);
      }
    });
  program.parse();
} catch (error) {
  //   console.log('err:', error);
}

// program.command('man').action(() => {
//   console.log('Hello Man!');
// });
