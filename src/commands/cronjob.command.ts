import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'cronjob',
  description: 'run cron job',
})
export class CronJobCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    let i = 0;
    const interval = setInterval(() => {
      if (i == 5) clearInterval(interval);
      console.log('cron job executing...');
      i++;
    }, 10000);
  }
}
