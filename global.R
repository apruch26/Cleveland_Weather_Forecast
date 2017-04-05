library(shiny)
library(ggplot2)
data<-read.csv('CLEforecast.csv',stringsAsFactors=FALSE,header=TRUE)
date<-data$Temperature_Date
temp<-data$Temperature
df<-data.frame(date,temp)