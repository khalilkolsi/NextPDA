CREATE TABLE IF NOT EXISTS [ClientVisite] (
	[Id] int NOT NULL IDENTITY(1,1) PRIMARY KEY, 
	[CodeClient] nvarchar(10), 
	[DateMission] datetime, 
	[Realisation] bit, 
	[Mission] nvarchar(50), 
	[Note] nvarchar(50), 
	[DateVisite] datetime, 
	[MontantTTC] float, 
	[BLNum] nvarchar(10)
);

CREATE UNIQUE INDEX [UQ__ClientVisite__000000000000032C]
	ON [ClientVisite] ([Id])
