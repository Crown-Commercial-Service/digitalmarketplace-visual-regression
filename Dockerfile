FROM backstopjs/backstopjs:v3.2.17

# Creates a Docker group and Jenkins user so that files created within the container are modifiable by the host.

RUN groupadd -g 999 docker
RUN useradd -s /bin/bash -u 1001 -G docker jenkins
USER jenkins
