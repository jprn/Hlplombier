{
  "name": "ContactRequest",
  "type": "object",
  "properties": {
    "nom": {
      "type": "string",
      "description": "Nom du client"
    },
    "telephone": {
      "type": "string",
      "description": "Num\u00e9ro de t\u00e9l\u00e9phone"
    },
    "email": {
      "type": "string",
      "description": "Email du client"
    },
    "adresse": {
      "type": "string",
      "description": "Adresse ou quartier"
    },
    "type_probleme": {
      "type": "string",
      "enum": [
        "fuite_eau",
        "chauffe_eau",
        "wc_debouchage",
        "robinetterie",
        "canalisation",
        "renovation",
        "autre"
      ],
      "description": "Type de probl\u00e8me"
    },
    "urgence": {
      "type": "boolean",
      "default": false,
      "description": "Intervention urgente"
    },
    "message": {
      "type": "string",
      "description": "Description du probl\u00e8me"
    },
    "photo_url": {
      "type": "string",
      "description": "Photo du probl\u00e8me"
    },
    "statut": {
      "type": "string",
      "enum": [
        "nouveau",
        "contacte",
        "intervention_planifiee",
        "termine"
      ],
      "default": "nouveau"
    }
  },
  "required": [
    "nom",
    "telephone",
    "type_probleme"
  ]
}