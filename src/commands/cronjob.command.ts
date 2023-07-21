import { Command, CommandRunner } from 'nest-commander';
import { AppService } from 'src/app.service';

@Command({
  name: 'cronjob',
  description: 'run cron job',
})
export class CronJobCommand extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    let i = 0;
    const interval = setInterval(() => {
      if (i == 5) clearInterval(interval);
      console.log(this.appService.getHello());
      i++;
    }, 10000);
  }
}
