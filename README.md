## Install Docker (engine & compose)

### Docker Engine

Remove old versions
```
apt-get purge lxc-docker
apt-get purge docker.io*
```

Add https transport for apt
```
apt-get update
apt-get install apt-transport-https ca-certificates
```

Write to `/etc/apt/sources.list.d/docker.list`
```
deb https://apt.dockerproject.org/repo debian-jessie main
```

Add signing key & install engine
```
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
apt-get update
apt-get install docker-engine
service docker start
```

### Giving non-root access
```
# Add the docker group if it doesn't already exist.
$ sudo groupadd docker

# Add the connected user "${USER}" to the docker group.
# Change the user name to match your preferred user.
# You may have to logout and log back in again for
# this to take effect.
$ sudo gpasswd -a ${USER} docker

# Restart the Docker daemon.
$ sudo service docker restart
```
**You may have to logout and log back in again for this to take effect.**

### Docker Compose
```
curl -L https://github.com/docker/compose/releases/download/1.8.0-rc1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

or

```
pip install docker-compose
```


## Run the test suite

First run will most likely be slow

```
cd ./to-cloned-repository
./run.sh
```
