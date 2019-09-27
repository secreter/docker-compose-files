FROM alpine:3.10

MAINTAINER So <so@redream.cn>

ENV TZ Asia/Shanghai

# Add crontab file in the cron directory
COPY crontab /crontab

RUN apk add --no-cache tzdata

CMD ["sh","-c", "crontab /crontab && crond -f -L -"]
