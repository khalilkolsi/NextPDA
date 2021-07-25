CREATE TABLE IF NOT EXISTS [ParametreCamionPDA] (
	[Id] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
	[CodeCamion] nvarchar(3), 
	[CodePDA] nvarchar(3), 
	[MatriculeCamion] nvarchar(50), 
	[Initialiser] bit, 
	[Date] datetime, 
	[DernierNumBL] int, 
	[DernierNumBE] int, 
	[SetCodeClient] int, 
	[Version] int, 
	[DateMiseAJour] datetime, 
	[Facture] int, 
	[Bonsortie] int, 
	[Prefix] nvarchar(10)
);


INSERT INTO [ParametreCamionPDA] ([CodeCamion],[CodePDA],[MatriculeCamion],[Initialiser],[Date],[DernierNumBL],[DernierNumBE],[SetCodeClient],[Version],[DateMiseAJour],[Facture],[Bonsortie],[Prefix]) VALUES ('87','87','7959 TUN 194',0,'20210424 01:14:48.543',8099,94,0,3,'20170529',10298,30142,'FA');
