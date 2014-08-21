<?xml version="1.0"?>
	<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
		<xsl:template match="/">
			<xsl:value-of select="//weatherdata//forecast//tabular//time[1]/temperature/@value"/> grader, 
			<xsl:value-of select="//weatherdata//forecast//tabular//time[1]/symbol/@name"/>, 
			<xsl:value-of select="//weatherdata//forecast//tabular//time[1]/windSpeed/@name"/>, max 
			<xsl:value-of select="sum(//weatherdata//forecast//tabular//time/precipitation/@maxvalue)"/> mm nedbør
	</xsl:template>
</xsl:stylesheet>