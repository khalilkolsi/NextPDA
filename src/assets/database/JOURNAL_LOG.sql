CREATE TABLE IF NOT EXISTS [JOURNAL_LOG] (
	[CODE_DEMARCHEUR] nvarchar(10), 
	[CODE_CLIENT] nvarchar(10), 
	[CLIENT] nvarchar(50), 
	[DATE] datetime, 
	[NUMERO] nvarchar(20), 
	[MONTANT] float, 
	[LIBELLE1] nvarchar(254), 
	[LIBELLE2] nvarchar(254)
);