FROM backstopjs/backstopjs:v3.0.38

# Creates a Docker group and Jenkins user so that files created within the container are modifiable by the host.

RUN addgroup -g 999 docker
RUN adduser -Ds /bin/bash -u 106 -G docker jenkins
USER jenkins
