CREATE TABLE IF NOT EXISTS [ArticleCodesPDA] (
	[Id] int NOT NULL IDENTITY(1,1) PRIMARY KEY, 
	[CodeArticle] nvarchar(20) NOT NULL, 
	[Code] nvarchar(20)
)

CREATE UNIQUE INDEX [UQ__ArticleCodesPDA__00000000000002FA]
	ON [ArticleCodesPDA] ([Id]);

INSERT INTO [ArticleCodesPDA] ([CodeArticle],[Code]) VALUES ('EAU4030','6191577600060');
INSERT INTO [ArticleCodesPDA] ([CodeArticle],[Code]) VALUES ('BGP4000','6194019605326');
INSERT INTO [ArticleCodesPDA] ([CodeArticle],[Code]) VALUES ('BGP4000','6194019605319');
INSERT INTO [ArticleCodesPDA] ([CodeArticle],[Code]) VALUES ('BGP2000','5449000000439');
INSERT INTO [ArticleCodesPDA] ([CodeArticle],[Code]) VALUES ('BGP2010','5449000052926');
INSERT INTO [ArticleCodesPDA] ([CodeArticle],[Code]) VALUES ('BGP3000','5449000054227');
