FROM ubuntu:18.04
ENV TZ=Asia/Shanghai
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    apt-get install cron && \
    wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add - && \
    echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list && \
    apt-get update && \
    apt-get install -y mongodb-org-shell mongodb-org-tools && \
    echo "mongodb-org-shell hold" | dpkg --set-selections && \
    echo "mongodb-org-tools hold" | dpkg --set-selections && \
    mkdir /backup \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone \
    && apt-get install tzdata \
    && apt-get clean \
    && apt-get autoclean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*  \

ENV CRON_TIME="0 0 * * *"
ADD run.sh /run.sh
RUN chmod +x /run.sh

VOLUME ["/backup"]
CMD ["/run.sh"]
