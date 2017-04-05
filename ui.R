shinyUI(
	fluidPage(
		HTML('<h1>Cleveland\'s Upcoming Forecast</h1>'),
		plotOutput('plot'),
		tableOutput('table')
	)
)