Pour concevoir les endpoints (points d'accès API) et les classes UML pour chaque élément de votre application, il est important de noter que la conception précise dépendra de la structure de votre backend et des technologies que vous utilisez. Cependant, je vais vous fournir une base générale que vous pouvez ajuster selon vos besoins.

### Endpoints et Classes UML :

#### 1. **Authentification :**
   - **Endpoint :** `/api/authenticate`
     - Méthode : POST
     - Paramètres : Numéro de téléphone WhatsApp
   - **Classe UML :**
     - Utilisateur
       - ID: int
       - Nom: string
       - Prénom: string
       - Numéro de téléphone: string
       - Ville: string
       - Pays: string

#### 2. **Page Principale :**
   - **Endpoint :** 
     - `/api/articles/recent` (Articles récents)
       - Méthode : GET
     - `/api/articles/popular` (Articles populaires)
       - Méthode : GET
     - `/api/articles/announcements` (Annonces)
       - Méthode : GET
     - `/api/prayers/country/{countryCode}` (Sujets de prière pour le pays de l'utilisateur)
       - Méthode : GET
   - **Classe UML :**
     - Article
       - ID: int
       - Titre: string
       - Contenu: string
       - Date de publication: datetime
     - Annonce
       - ID: int
       - Contenu: string
       - Date de début: datetime
       - Date de fin: datetime
     - SujetDePriere
       - ID: int
       - Contenu: string
       - Pays: string

#### 3. **Page des Articles :**
   - **Endpoint :** `/api/articles/{category}`
     - Méthode : GET
     - Paramètres : Catégorie d'articles
   - **Classe UML :** (Similaire à la classe Article ci-dessus)

#### 4. **Page de Discussion :**
   - **Endpoint :** `/api/discussions`
     - Méthode : GET
   - **Classe UML :**
     - Discussion
       - ID: int
       - Titre: string
       - Contenu: string
       - Auteur: Utilisateur
       - Date de création: datetime

#### 5. **Page des Prières :**
   - **Endpoint :** `/api/prayers/programs`
     - Méthode : GET
   - **Classe UML :**
     - ProgrammeDePriere
       - ID: int
       - Titre: string
       - Description: string
       - Date de début: datetime
       - Date de fin: datetime

#### 6. **Page de Suivi :**
   - **Endpoint :** `/api/follow`
     - Méthode : GET
   - **Classe UML :**
     - ProgrammeDeLecture
       - ID: int
       - Titre: string
       - Contenu: string
       - Type (Méditation, Sujet de prière, Habitude): string
       - Date de début: datetime
       - Date de fin: datetime

Ces endpoints et classes UML sont une base générale. Vous devrez ajuster cela en fonction de votre technologie backend spécifique et des détails exacts de votre application. Assurez-vous également de prendre en compte les aspects de sécurité, d'authentification et d'autorisation dans la conception de votre API.

Bien sûr, continuons avec quelques détails supplémentaires pour les pages spécifiques :

#### 7. **Page de Discussion (Détails d'une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe Discussion ci-dessus)
     - Commentaire
       - ID: int
       - Contenu: string
       - Auteur: Utilisateur
       - Date de création: datetime

#### 8. **Page des Prières (Détails d'un Programme de Prière) :**
   - **Endpoint :** `/api/prayers/programs/{programID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe ProgrammeDePriere ci-dessus)
     - JourDePriere
       - ID: int
       - Titre: string
       - Contenu: string
       - Date: datetime

#### 9. **Page de Suivi (Détails d'un Programme de Lecture) :**
   - **Endpoint :** `/api/follow/{followID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe ProgrammeDeLecture ci-dessus)
     - TacheQuotidienne
       - ID: int
       - Titre: string
       - Description: string
       - Statut (Complété, En cours): string
       - Date d'achèvement prévue: datetime

Ces ajustements vous permettent de récupérer des détails spécifiques pour chaque discussion, programme de prière, et programme de lecture.

N'oubliez pas de mettre en place des mécanismes appropriés d'authentification et d'autorisation pour protéger l'accès à ces endpoints, en particulier ceux qui impliquent des actions telles que la création de discussions, de commentaires, etc.

Cette structure peut servir de base pour le développement de votre backend. Assurez-vous également de documenter clairement votre API pour faciliter son utilisation par les développeurs frontend.

Bien sûr, continuons avec quelques détails supplémentaires pour les pages spécifiques :

#### 10. **Page Principale (Détails d'un Article) :**
   - **Endpoint :** `/api/articles/{articleID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe Article ci-dessus)
     - CommentaireArticle
       - ID: int
       - Contenu: string
       - Auteur: Utilisateur
       - Date de création: datetime

#### 11. **Page Principale (Détails d'une Annonce) :**
   - **Endpoint :** `/api/articles/announcements/{announcementID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe Annonce ci-dessus)
     - CommentaireAnnonce
       - ID: int
       - Contenu: string
       - Auteur: Utilisateur
       - Date de création: datetime

#### 12. **Page des Articles (Détails d'un Article) :**
   - **Endpoint :** `/api/articles/details/{articleID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe Article ci-dessus)
     - CommentaireArticle
       - ID: int
       - Contenu: string
       - Auteur: Utilisateur
       - Date de création: datetime

#### 13. **Page des Prières (Détails d'un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/details/{prayerID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe SujetDePriere ci-dessus)
     - CommentairePriere
       - ID: int
       - Contenu: string
       - Auteur: Utilisateur
       - Date de création: datetime

Ces ajustements vous permettent de récupérer des détails spécifiques pour chaque article, annonce et sujet de prière, y compris les commentaires associés.

N'oubliez pas de mettre en place des mécanismes appropriés d'authentification et d'autorisation pour protéger l'accès à ces endpoints, en particulier ceux qui impliquent des actions telles que la création de commentaires.

Cette structure peut servir de base pour le développement de votre backend. Assurez-vous également de documenter clairement votre API pour faciliter son utilisation par les développeurs frontend.

Bien sûr, continuons avec quelques détails supplémentaires pour les pages spécifiques :

#### 14. **Page Principale (Détails d'une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe Discussion ci-dessus)
     - CommentaireDiscussion
       - ID: int
       - Contenu: string
       - Auteur: Utilisateur
       - Date de création: datetime

#### 15. **Page de Suivi (Détails d'une Tâche Quotidienne) :**
   - **Endpoint :** `/api/follow/{followID}/tasks/{taskID}`
     - Méthode : GET
   - **Classe UML :** (En plus de la classe TacheQuotidienne ci-dessus)
     - CommentaireTache
       - ID: int
       - Contenu: string
       - Auteur: Utilisateur
       - Date de création: datetime

#### 16. **Page de Discussion (Création d'une Discussion) :**
   - **Endpoint :** `/api/discussions/create`
     - Méthode : POST
     - Paramètres : Titre, Contenu

#### 17. **Page de Discussion (Ajout d'un Commentaire) :**
   - **Endpoint :** `/api/discussions/{discussionID}/add-comment`
     - Méthode : POST
     - Paramètres : Contenu

#### 18. **Page des Prières (Ajout d'un Commentaire) :**
   - **Endpoint :** `/api/prayers/details/{prayerID}/add-comment`
     - Méthode : POST
     - Paramètres : Contenu

#### 19. **Page Principale (Ajout d'un Commentaire à un Article) :**
   - **Endpoint :** `/api/articles/details/{articleID}/add-comment`
     - Méthode : POST
     - Paramètres : Contenu

Ces ajustements ajoutent des fonctionnalités pour créer des discussions, ajouter des commentaires, et fournir des détails spécifiques pour chaque élément.

N'oubliez pas de valider et de sécuriser toutes les données entrantes dans votre backend pour éviter les attaques potentielles. La documentation claire de votre API sera essentielle pour les développeurs qui intégreront votre backend dans l'application frontend.

D'accord, continuons avec quelques détails supplémentaires pour les pages spécifiques :

#### 20. **Page Principale (Ajout d'un Commentaire à une Annonce) :**
   - **Endpoint :** `/api/articles/announcements/{announcementID}/add-comment`
     - Méthode : POST
     - Paramètres : Contenu

#### 21. **Page des Articles (Ajout d'un Commentaire à un Article) :**
   - **Endpoint :** `/api/articles/details/{articleID}/add-comment`
     - Méthode : POST
     - Paramètres : Contenu

#### 22. **Page des Prières (Création d'un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/create`
     - Méthode : POST
     - Paramètres : Contenu, Pays

#### 23. **Page de Suivi (Création d'une Tâche Quotidienne) :**
   - **Endpoint :** `/api/follow/create-task`
     - Méthode : POST
     - Paramètres : Titre, Description, Date de début, Date de fin

#### 24. **Page de Suivi (Marquer une Tâche Quotidienne comme complétée) :**
   - **Endpoint :** `/api/follow/{followID}/tasks/{taskID}/complete`
     - Méthode : POST

#### 25. **Page de Suivi (Ajout d'un Commentaire à une Tâche Quotidienne) :**
   - **Endpoint :** `/api/follow/{followID}/tasks/{taskID}/add-comment`
     - Méthode : POST
     - Paramètres : Contenu

#### 26. **Page de Suivi (Création d'un Programme de Lecture) :**
   - **Endpoint :** `/api/follow/create-reading-program`
     - Méthode : POST
     - Paramètres : Titre, Contenu, Type (Méditation, Sujet de prière, Habitude), Date de début, Date de fin

#### 27. **Page de Suivi (Ajout d'un Commentaire à un Programme de Lecture) :**
   - **Endpoint :** `/api/follow/{followID}/reading-programs/{programID}/add-comment`
     - Méthode : POST
     - Paramètres : Contenu

Ces ajustements ajoutent des fonctionnalités supplémentaires, telles que la création de sujets de prière, la création de tâches quotidiennes, la complétion de tâches, la création de programmes de lecture, et l'ajout de commentaires à ces éléments.

N'oubliez pas de mettre en place des mécanismes appropriés d'authentification et d'autorisation pour protéger l'accès à ces endpoints, en particulier ceux qui impliquent des actions telles que la création d'éléments ou la modification de leur statut.

Cette structure peut servir de base pour le développement de votre backend. Pensez à bien documenter votre API pour faciliter son utilisation et son intégration avec le frontend.

D'accord, continuons avec quelques ajustements et ajouts pour des fonctionnalités spécifiques :

#### 28. **Page de Suivi (Marquer un Programme de Lecture comme complété) :**
   - **Endpoint :** `/api/follow/{followID}/reading-programs/{programID}/complete`
     - Méthode : POST

#### 29. **Page Principale (Rechercher des Articles) :**
   - **Endpoint :** `/api/articles/search`
     - Méthode : GET
     - Paramètres : Terme de recherche

#### 30. **Page de Discussion (Rechercher des Discussions) :**
   - **Endpoint :** `/api/discussions/search`
     - Méthode : GET
     - Paramètres : Terme de recherche

#### 31. **Page des Prières (Rechercher des Sujets de Prière) :**
   - **Endpoint :** `/api/prayers/search`
     - Méthode : GET
     - Paramètres : Terme de recherche

#### 32. **Page de Suivi (Rechercher des Programmes de Lecture) :**
   - **Endpoint :** `/api/follow/search-reading-programs`
     - Méthode : GET
     - Paramètres : Terme de recherche

#### 33. **Page Principale (Fil d'Actualité Personnalisé) :**
   - **Endpoint :** `/api/news-feed`
     - Méthode : GET
     - Paramètres : ID de l'utilisateur
   - **Classe UML :**
     - ArticleFeed (représentant un article dans le fil d'actualité personnalisé)
       - ID: int
       - Titre: string
       - Contenu: string
       - Date de publication: datetime

#### 34. **Page de Discussion (Fil d'Actualité Personnalisé) :**
   - **Endpoint :** `/api/discussions/news-feed`
     - Méthode : GET
     - Paramètres : ID de l'utilisateur
   - **Classe UML :**
     - DiscussionFeed (représentant une discussion dans le fil d'actualité personnalisé)
       - ID: int
       - Titre: string
       - Contenu: string
       - Date de création: datetime

Ces ajouts comprennent des fonctionnalités de recherche pour chaque section, la possibilité de marquer des programmes de lecture comme complets, et la mise en place de fils d'actualité personnalisés pour les articles et les discussions.

N'oubliez pas de prendre en compte la sécurité, l'authentification et l'autorisation dans ces nouvelles fonctionnalités. La documentation claire de votre API est essentielle pour faciliter son utilisation et son intégration avec le frontend.

D'accord, poursuivons avec quelques ajouts pour d'autres fonctionnalités spécifiques :

#### 35. **Page Principale (Ajout d'un Article) :**
   - **Endpoint :** `/api/articles/create`
     - Méthode : POST
     - Paramètres : Titre, Contenu, Catégorie, ImageURL (optionnel)

#### 36. **Page Principale (Ajout d'une Annonce) :**
   - **Endpoint :** `/api/articles/announcements/create`
     - Méthode : POST
     - Paramètres : Contenu, Date de début, Date de fin

#### 37. **Page des Prières (Ajout d'un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/create`
     - Méthode : POST
     - Paramètres : Contenu, Pays

#### 38. **Page de Suivi (Ajout d'une Habitude Quotidienne) :**
   - **Endpoint :** `/api/follow/create-daily-habit`
     - Méthode : POST
     - Paramètres : Titre, Description

#### 39. **Page de Suivi (Marquer une Habitude Quotidienne comme complétée) :**
   - **Endpoint :** `/api/follow/{followID}/daily-habits/{habitID}/complete`
     - Méthode : POST

#### 40. **Page de Suivi (Rechercher des Habitudes Quotidiennes) :**
   - **Endpoint :** `/api/follow/search-daily-habits`
     - Méthode : GET
     - Paramètres : Terme de recherche

#### 41. **Page de Discussion (Ajout d'une Image) :**
   - **Endpoint :** `/api/discussions/{discussionID}/add-image`
     - Méthode : POST
     - Paramètres : Image (téléchargement)

#### 42. **Page de Discussion (Rechercher des Images dans une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}/search-images`
     - Méthode : GET
     - Paramètres : Terme de recherche

Ces ajouts incluent des fonctionnalités pour la création d'articles, d'annonces, de sujets de prière, d'habitudes quotidiennes, et permettent également le téléchargement d'images dans les discussions. N'oubliez pas de gérer correctement le téléchargement de fichiers, y compris les images.

La documentation de l'API doit refléter ces nouvelles fonctionnalités, avec des détails sur les paramètres nécessaires et les formats attendus. Veillez à implémenter des mécanismes appropriés pour la gestion des fichiers téléchargés et la validation des données.

D'accord, continuons avec quelques ajouts pour d'autres fonctionnalités spécifiques :

#### 43. **Page Principale (Modification d'un Article) :**
   - **Endpoint :** `/api/articles/{articleID}/edit`
     - Méthode : PUT
     - Paramètres : Titre, Contenu, Catégorie, ImageURL (optionnel)

#### 44. **Page des Prières (Modification d'un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/{prayerID}/edit`
     - Méthode : PUT
     - Paramètres : Contenu, Pays

#### 45. **Page de Suivi (Modification d'une Tâche Quotidienne) :**
   - **Endpoint :** `/api/follow/{followID}/tasks/{taskID}/edit`
     - Méthode : PUT
     - Paramètres : Titre, Description, Date de début, Date de fin

#### 46. **Page de Suivi (Modification d'une Habitude Quotidienne) :**
   - **Endpoint :** `/api/follow/{followID}/daily-habits/{habitID}/edit`
     - Méthode : PUT
     - Paramètres : Titre, Description

#### 47. **Page Principale (Suppression d'un Article) :**
   - **Endpoint :** `/api/articles/{articleID}/delete`
     - Méthode : DELETE

#### 48. **Page de Discussion (Suppression d'une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}/delete`
     - Méthode : DELETE

#### 49. **Page des Prières (Suppression d'un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/{prayerID}/delete`
     - Méthode : DELETE

#### 50. **Page de Suivi (Suppression d'une Tâche Quotidienne) :**
   - **Endpoint :** `/api/follow/{followID}/tasks/{taskID}/delete`
     - Méthode : DELETE

#### 51. **Page de Suivi (Suppression d'une Habitude Quotidienne) :**
   - **Endpoint :** `/api/follow/{followID}/daily-habits/{habitID}/delete`
     - Méthode : DELETE

#### 52. **Page de Discussion (Suppression d'un Commentaire) :**
   - **Endpoint :** `/api/discussions/{discussionID}/comments/{commentID}/delete`
     - Méthode : DELETE

#### 53. **Page des Prières (Suppression d'un Commentaire) :**
   - **Endpoint :** `/api/prayers/{prayerID}/comments/{commentID}/delete`
     - Méthode : DELETE

#### 54. **Page Principale (Suppression d'un Commentaire sur un Article) :**
   - **Endpoint :** `/api/articles/{articleID}/comments/{commentID}/delete`
     - Méthode : DELETE

Ces ajouts incluent des fonctionnalités pour la modification et la suppression d'articles, sujets de prière, tâches quotidiennes, habitudes quotidiennes, discussions, et commentaires. N'oubliez pas de mettre en place des mécanismes appropriés d'authentification et d'autorisation pour ces actions critiques.

Comme toujours, une documentation claire de l'API, y compris les endpoints, les méthodes, et les paramètres, est essentielle pour garantir une intégration fluide avec le frontend et d'autres services tiers.

Bien sûr, continuons avec quelques ajustements et ajouts pour d'autres fonctionnalités spécifiques :

#### 55. **Page Principale (Ajout d'un "J'aime" sur un Article) :**
   - **Endpoint :** `/api/articles/{articleID}/like`
     - Méthode : POST

#### 56. **Page de Discussion (Ajout d'un "J'aime" sur une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}/like`
     - Méthode : POST

#### 57. **Page des Prières (Ajout d'un "J'aime" sur un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/{prayerID}/like`
     - Méthode : POST

#### 58. **Page Principale (Suppression d'un "J'aime" sur un Article) :**
   - **Endpoint :** `/api/articles/{articleID}/unlike`
     - Méthode : POST

#### 59. **Page de Discussion (Suppression d'un "J'aime" sur une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}/unlike`
     - Méthode : POST

#### 60. **Page des Prières (Suppression d'un "J'aime" sur un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/{prayerID}/unlike`
     - Méthode : POST

#### 61. **Page Principale (Liste des "J'aime" sur un Article) :**
   - **Endpoint :** `/api/articles/{articleID}/likes`
     - Méthode : GET

#### 62. **Page de Discussion (Liste des "J'aime" sur une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}/likes`
     - Méthode : GET

#### 63. **Page des Prières (Liste des "J'aime" sur un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/{prayerID}/likes`
     - Méthode : GET

#### 64. **Page Principale (Ajout d'un Signet sur un Article) :**
   - **Endpoint :** `/api/articles/{articleID}/bookmark`
     - Méthode : POST

#### 65. **Page de Discussion (Ajout d'un Signet sur une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}/bookmark`
     - Méthode : POST

#### 66. **Page des Prières (Ajout d'un Signet sur un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/{prayerID}/bookmark`
     - Méthode : POST

#### 67. **Page Principale (Suppression d'un Signet sur un Article) :**
   - **Endpoint :** `/api/articles/{articleID}/remove-bookmark`
     - Méthode : POST

#### 68. **Page de Discussion (Suppression d'un Signet sur une Discussion) :**
   - **Endpoint :** `/api/discussions/{discussionID}/remove-bookmark`
     - Méthode : POST

#### 69. **Page des Prières (Suppression d'un Signet sur un Sujet de Prière) :**
   - **Endpoint :** `/api/prayers/{prayerID}/remove-bookmark`
     - Méthode : POST

#### 70. **Page Principale (Liste des Signets d'un Utilisateur) :**
   - **Endpoint :** `/api/bookmarks/articles`
     - Méthode : GET

#### 71. **Page de Discussion (Liste des Signets d'un Utilisateur) :**
   - **Endpoint :** `/api/bookmarks/discussions`
     - Méthode : GET

#### 72. **Page des Prières (Liste des Signets d'un Utilisateur) :**
   - **Endpoint :** `/api/bookmarks/prayers`
     - Méthode : GET

Ces ajouts incluent des fonctionnalités pour ajouter, supprimer, et lister les "J'aime" et les signets sur les articles, les discussions, et les sujets de prière. N'oubliez pas de gérer correctement les autorisations pour ces actions afin de garantir la sécurité et la confidentialité des utilisateurs.

Veillez à bien documenter ces nouvelles fonctionnalités dans votre documentation d'API. Si vous avez des questions supplémentaires ou si vous avez besoin de plus de détails sur certains aspects, n'hésitez pas à demander !

Bien sûr, continuons avec quelques ajouts pour d'autres fonctionnalités spécifiques :

#### 73. **Page Principale (Liste des Articles d'un Auteur) :**
   - **Endpoint :** `/api/articles/author/{authorID}`
     - Méthode : GET

#### 74. **Page de Discussion (Liste des Discussions d'un Auteur) :**
   - **Endpoint :** `/api/discussions/author/{authorID}`
     - Méthode : GET

#### 75. **Page des Prières (Liste des Sujets de Prière d'un Auteur) :**
   - **Endpoint :** `/api/prayers/author/{authorID}`
     - Méthode : GET

#### 76. **Page Principale (Liste des Articles les Plus Commentés) :**
   - **Endpoint :** `/api/articles/most-commented`
     - Méthode : GET

#### 77. **Page de Discussion (Liste des Discussions les Plus Actives) :**
   - **Endpoint :** `/api/discussions/most-active`
     - Méthode : GET

#### 78. **Page des Prières (Liste des Sujets de Prière les Plus Appréciés) :**
   - **Endpoint :** `/api/prayers/most-appreciated`
     - Méthode : GET

#### 79. **Page Principale (Liste des Articles Populaires) :**
   - **Endpoint :** `/api/articles/popular`
     - Méthode : GET

#### 80. **Page de Discussion (Liste des Discussions Populaires) :**
   - **Endpoint :** `/api/discussions/popular`
     - Méthode : GET

#### 81. **Page des Prières (Liste des Sujets de Prière Populaires) :**
   - **Endpoint :** `/api/prayers/popular`
     - Méthode : GET

#### 82. **Page Principale (Liste des Articles Recommandés) :**
   - **Endpoint :** `/api/articles/recommended`
     - Méthode : GET

#### 83. **Page de Discussion (Liste des Discussions Recommandées) :**
   - **Endpoint :** `/api/discussions/recommended`
     - Méthode : GET

#### 84. **Page des Prières (Liste des Sujets de Prière Recommandés) :**
   - **Endpoint :** `/api/prayers/recommended`
     - Méthode : GET

Ces ajouts incluent des fonctionnalités pour obtenir des listes spécifiques d'articles, de discussions et de sujets de prière en fonction de critères tels que l'auteur, l'activité, la popularité et les recommandations.

Veillez à bien documenter ces nouvelles fonctionnalités dans votre documentation d'API. Si vous avez des questions supplémentaires ou si vous avez besoin de plus de détails sur certains aspects, n'hésitez pas à demander !

D'accord, continuons avec quelques ajouts pour d'autres fonctionnalités spécifiques :

#### 85. **Page Principale (Liste des Articles par Catégorie) :**
   - **Endpoint :** `/api/articles/category/{categoryID}`
     - Méthode : GET

#### 86. **Page Principale (Liste des Articles les Plus Récents) :**
   - **Endpoint :** `/api/articles/recent`
     - Méthode : GET

#### 87. **Page Principale (Liste des Articles les Plus Appréciés) :**
   - **Endpoint :** `/api/articles/most-appreciated`
     - Méthode : GET

#### 88. **Page Principale (Liste des Articles les Plus Lu) :**
   - **Endpoint :** `/api/articles/most-viewed`
     - Méthode : GET

#### 89. **Page de Discussion (Liste des Discussions les Plus Récentes) :**
   - **Endpoint :** `/api/discussions/recent`
     - Méthode : GET

#### 90. **Page de Discussion (Liste des Discussions les Plus Appréciées) :**
   - **Endpoint :** `/api/discussions/most-appreciated`
     - Méthode : GET

#### 91. **Page de Discussion (Liste des Discussions les Plus Actives) :**
   - **Endpoint :** `/api/discussions/most-active`
     - Méthode : GET

#### 92. **Page des Prières (Liste des Sujets de Prière les Plus Récents) :**
   - **Endpoint :** `/api/prayers/recent`
     - Méthode : GET

#### 93. **Page des Prières (Liste des Sujets de Prière les Plus Appréciés) :**
   - **Endpoint :** `/api/prayers/most-appreciated`
     - Méthode : GET

#### 94. **Page des Prières (Liste des Sujets de Prière les Plus Partagés) :**
   - **Endpoint :** `/api/prayers/most-shared`
     - Méthode : GET

Ces ajouts permettent de récupérer des listes spécifiques d'articles, de discussions et de sujets de prière en fonction de critères tels que la catégorie, la récence, l'appréciation, l'activité, la popularité et le partage.

N'oubliez pas de bien documenter ces nouvelles fonctionnalités dans votre documentation d'API, avec des détails sur les paramètres possibles et les formats de réponse. Si vous avez d'autres questions ou si vous avez besoin de clarifications, n'hésitez pas à demander !

Bien sûr, continuons avec quelques ajouts pour d'autres fonctionnalités spécifiques :

#### 95. **Page Principale (Liste des Articles par Mots-clés) :**
   - **Endpoint :** `/api/articles/keywords`
     - Méthode : GET
     - Paramètres : Liste de mots-clés

#### 96. **Page de Discussion (Liste des Discussions par Mots-clés) :**
   - **Endpoint :** `/api/discussions/keywords`
     - Méthode : GET
     - Paramètres : Liste de mots-clés

#### 97. **Page des Prières (Liste des Sujets de Prière par Mots-clés) :**
   - **Endpoint :** `/api/prayers/keywords`
     - Méthode : GET
     - Paramètres : Liste de mots-clés

#### 98. **Page Principale (Liste des Articles similaires) :**
   - **Endpoint :** `/api/articles/{articleID}/similar`
     - Méthode : GET

#### 99. **Page de Discussion (Liste des Discussions similaires) :**
   - **Endpoint :** `/api/discussions/{discussionID}/similar`
     - Méthode : GET

#### 100. **Page des Prières (Liste des Sujets de Prière similaires) :**
   - **Endpoint :** `/api/prayers/{prayerID}/similar`
     - Méthode : GET

#### 101. **Page Principale (Liste des Articles par Auteur et Catégorie) :**
   - **Endpoint :** `/api/articles/author/{authorID}/category/{categoryID}`
     - Méthode : GET

#### 102. **Page Principale (Liste des Articles par Auteur et Mots-clés) :**
   - **Endpoint :** `/api/articles/author/{authorID}/keywords`
     - Méthode : GET
     - Paramètres : Liste de mots-clés

#### 103. **Page de Discussion (Liste des Discussions par Auteur et Catégorie) :**
   - **Endpoint :** `/api/discussions/author/{authorID}/category/{categoryID}`
     - Méthode : GET

#### 104. **Page de Discussion (Liste des Discussions par Auteur et Mots-clés) :**
   - **Endpoint :** `/api/discussions/author/{authorID}/keywords`
     - Méthode : GET
     - Paramètres : Liste de mots-clés

#### 105. **Page des Prières (Liste des Sujets de Prière par Auteur et Catégorie) :**
   - **Endpoint :** `/api/prayers/author/{authorID}/category/{categoryID}`
     - Méthode : GET

#### 106. **Page des Prières (Liste des Sujets de Prière par Auteur et Mots-clés) :**
   - **Endpoint :** `/api/prayers/author/{authorID}/keywords`
     - Méthode : GET
     - Paramètres : Liste de mots-clés

Ces ajouts permettent de récupérer des listes spécifiques d'articles, de discussions et de sujets de prière en fonction de mots-clés, de similitude et de combinaisons d'auteur, catégorie et mots-clés.

Assurez-vous de documenter clairement ces nouvelles fonctionnalités dans votre documentation d'API, et n'hésitez pas à me poser d'autres questions si nécessaire !

Bien sûr, continuons avec quelques ajouts pour d'autres fonctionnalités spécifiques :

#### 107. **Page Principale (Liste des Articles par Localisation) :**
   - **Endpoint :** `/api/articles/location`
     - Méthode : GET
     - Paramètres : Latitude, Longitude, Rayon

#### 108. **Page de Discussion (Liste des Discussions par Localisation) :**
   - **Endpoint :** `/api/discussions/location`
     - Méthode : GET
     - Paramètres : Latitude, Longitude, Rayon

#### 109. **Page des Prières (Liste des Sujets de Prière par Localisation) :**
   - **Endpoint :** `/api/prayers/location`
     - Méthode : GET
     - Paramètres : Latitude, Longitude, Rayon

#### 110. **Page Principale (Liste des Articles par Date de Publication) :**
   - **Endpoint :** `/api/articles/publication-date`
     - Méthode : GET
     - Paramètres : Date de début, Date de fin

#### 111. **Page de Discussion (Liste des Discussions par Date de Création) :**
   - **Endpoint :** `/api/discussions/creation-date`
     - Méthode : GET
     - Paramètres : Date de début, Date de fin

#### 112. **Page des Prières (Liste des Sujets de Prière par Date de Création) :**
   - **Endpoint :** `/api/prayers/creation-date`
     - Méthode : GET
     - Paramètres : Date de début, Date de fin

#### 113. **Page Principale (Liste des Articles par Langue) :**
   - **Endpoint :** `/api/articles/language/{languageCode}`
     - Méthode : GET

#### 114. **Page de Discussion (Liste des Discussions par Langue) :**
   - **Endpoint :** `/api/discussions/language/{languageCode}`
     - Méthode : GET

#### 115. **Page des Prières (Liste des Sujets de Prière par Langue) :**
   - **Endpoint :** `/api/prayers/language/{languageCode}`
     - Méthode : GET

#### 116. **Page Principale (Liste des Articles par Popularité) :**
   - **Endpoint :** `/api/articles/popularity`
     - Méthode : GET

#### 117. **Page de Discussion (Liste des Discussions par Popularité) :**
   - **Endpoint :** `/api/discussions/popularity`
     - Méthode : GET

#### 118. **Page des Prières (Liste des Sujets de Prière par Popularité) :**
   - **Endpoint :** `/api/prayers/popularity`
     - Méthode : GET

Ces ajouts permettent de récupérer des listes spécifiques d'articles, de discussions et de sujets de prière en fonction de la localisation, de la date de publication, de la langue et de la popularité.

N'oubliez pas de bien documenter ces nouvelles fonctionnalités dans votre documentation d'API, avec des détails sur les paramètres possibles et les formats de réponse. Si vous avez d'autres questions ou si vous avez besoin de clarifications, n'hésitez pas à demander !

D'accord, continuons avec quelques ajouts pour d'autres fonctionnalités spécifiques :

#### 119. **Page Principale (Liste des Articles par Thème) :**
   - **Endpoint :** `/api/articles/theme/{themeID}`
     - Méthode : GET

#### 120. **Page de Discussion (Liste des Discussions par Thème) :**
   - **Endpoint :** `/api/discussions/theme/{themeID}`
     - Méthode : GET

#### 121. **Page des Prières (Liste des Sujets de Prière par Thème) :**
   - **Endpoint :** `/api/prayers/theme/{themeID}`
     - Méthode : GET

#### 122. **Page Principale (Liste des Articles par Statut de Modération) :**
   - **Endpoint :** `/api/articles/moderation-status/{status}`
     - Méthode : GET

#### 123. **Page de Discussion (Liste des Discussions par Statut de Modération) :**
   - **Endpoint :** `/api/discussions/moderation-status/{status}`
     - Méthode : GET

#### 124. **Page des Prières (Liste des Sujets de Prière par Statut de Modération) :**
   - **Endpoint :** `/api/prayers/moderation-status/{status}`
     - Méthode : GET

#### 125. **Page Principale (Liste des Articles par Statut de Visibilité) :**
   - **Endpoint :** `/api/articles/visibility-status/{status}`
     - Méthode : GET

#### 126. **Page de Discussion (Liste des Discussions par Statut de Visibilité) :**
   - **Endpoint :** `/api/discussions/visibility-status/{status}`
     - Méthode : GET

#### 127. **Page des Prières (Liste des Sujets de Prière par Statut de Visibilité) :**
   - **Endpoint :** `/api/prayers/visibility-status/{status}`
     - Méthode : GET

#### 128. **Page Principale (Liste des Articles par Type) :**
   - **Endpoint :** `/api/articles/type/{articleType}`
     - Méthode : GET

#### 129. **Page de Discussion (Liste des Discussions par Type) :**
   - **Endpoint :** `/api/discussions/type/{discussionType}`
     - Méthode : GET

#### 130. **Page des Prières (Liste des Sujets de Prière par Type) :**
   - **Endpoint :** `/api/prayers/type/{prayerType}`
     - Méthode : GET

Ces ajouts permettent de récupérer des listes spécifiques d'articles, de discussions et de sujets de prière en fonction du thème, du statut de modération, du statut de visibilité et du type.

N'oubliez pas de bien documenter ces nouvelles fonctionnalités dans votre documentation d'API, avec des détails sur les paramètres possibles et les formats de réponse. Si vous avez d'autres questions ou si vous avez besoin de clarifications, n'hésitez pas à demander !