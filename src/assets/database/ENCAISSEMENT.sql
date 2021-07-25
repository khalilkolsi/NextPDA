CREATE TABLE IF NOT EXISTS [Encaissement] (
	[Date] datetime, 
	[NumChq] nvarchar(30), 
	[MontantEspace] float, 
	[MontantCheque] float, 
	[MontantEffet] float, 
	[MontantRetenu] float, 
	[IdEncaissement] int NOT NULL IDENTITY(1,1) PRIMARY KEY, 
	[IdCamionPDA] nvarchar(3), 
	[CodeClient] nvarchar(10) NOT NULL
);
CREATE UNIQUE INDEX [UQ__Encaissement__0000000000000250]
	ON [Encaissement] ([IdEncaissement])