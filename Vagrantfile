# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/focal64"
  config.vm.hostname = "bte-gatherer-vm"
  config.vm.network "public_network"
  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.network "forwarded_port", guest: 1905, host: 1905
  config.vm.network "forwarded_port", guest: 1915, host: 1915
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 5000, host: 5000
  config.vm.network "forwarded_port", guest: 5900, host: 5900
  config.vm.network "forwarded_port", guest: 5432, host: 5432
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 27017, host: 27017 

  config.vm.synced_folder "../tickets-pro-prototype", "/home/vagrant/shared/tickets-pro-prototype/"

  config.vm.provider :virtualbox do |vb|
    vb.name = "enve-tickets-pro"
    vb.memory = 4096
    vb.cpus = 2
  end

  config.vm.provision "shell", inline: <<-SHELL
      sudo apt-get remove docker docker-engine docker.io
      sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates software-properties-common curl jq net-tools
      sudo apt-get install -y x11vnc xvfb fluxbox wget gnupg wmctrl
      curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
      sudo apt-key fingerprint 0EBFCD88
      sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
      curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
      sudo apt-get update
      sudo apt-get install -y docker-ce docker-compose nodejs postgresql-client
      curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\
      sudo apt-get install -y nodejs
      sudo apt install mysql-server
  SHELL

end