shinyServer(function(input,output){
	output$plot<-renderPlot({
		ggplot()+
			geom_point(data=df,aes(x=date,y=temp)) #Having trouble getting the line to appear so I am using geom_point here
	})
	output$table<-renderTable({df})
})