FROM python:3.8

ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
WORKDIR /backend
COPY . /backend/

RUN pip install -r requirements.txt

 