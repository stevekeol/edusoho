<?php

namespace AppBundle\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class SchedulerCommand extends BaseCommand
{
    protected function configure()
    {
        $this->setName('util:scheduler');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $logger = $this->getContainer()->get('logger');
        $logger->info('Crontab:开始执行定时任务');

        $this->setDisableWebCrontab();
        $this->initServiceKernel();
        $biz = $this->getBiz();
        $biz['scheduler']->execute();

        $logger->info('Crontab:定时任务执行完毕');
    }

    protected function setDisableWebCrontab()
    {
        $setting = $this->getSettingService()->get('magic', array());
        if (empty($setting['disable_web_crontab'])) {
            $setting['disable_web_crontab'] = 1;
            $this->getSettingService()->set('magic', $setting);
        }
    }

    protected function getSettingService()
    {
        return $this->getServiceKernel()->createService('System:SettingService');
    }
}
