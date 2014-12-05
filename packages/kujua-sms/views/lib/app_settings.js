
/*
 * Default app_settings values. This file will get merged with the actual
 * `app_settings` property on the design doc.
 *
 * If you add a new value to kanso.json settings_schema then you should update
 * this file also.  If you forget to update this then new defauls won't show up
 * in settings until it gets saved in the dashboard. This can be an issue if
 * you have a new feature that expects a setting default value.
 */

module.exports = {
   "locales": [
      {
          "code": "en",
          "name": "English"
      },
      {
          "code": "es",
          "name": "Spanish"
      },
      {
          "code": "fr",
          "name": "French"
      },
      {
          "code": "ne",
          "name": "Nepali"
      },
      {
          "code": "sw",
          "name": "Swahili"
      }
   ],
   "locale": "en",
   "muvuku_webapp_url": "/medic-reporter/_design/medic-reporter/_rewrite/?_embed_mode=2",
   "date_format": "DD-MMM-YYYY",
   "reported_date_format": "DD-MMM-YYYY HH:mm:ss",
   "forms_only_mode": false,
   "default_responses": {
       "start_date": ""
   },
   "district_admins_access_unallocated_messages": false,
   "public_access": false,
   "default_country_code": 1,
   "gateway_number": "+13125551212",
   "kujua-reporting": [
       {
           "code": "VPD",
           "reporting_freq": "weekly"
       }
   ],
   "anc_forms": {
      "registration": "R",
      "registrationLmp": "P",
      "visit": "V",
      "delivery": "D",
      "flag": "F"
   },
   "schedule_morning_hours": 0,
   "schedule_morning_minutes": 0,
   "schedule_evening_hours": 23,
   "schedule_evening_minutes": 0,
   "synthetic_date": "",
   "contact_display_short": "clinic.name",
   "translations": [
      {
          "key": "Contact",
          "default": "Contact",
          "translations": [
              {
                  "locale": "en",
                  "content": "Contact"
              },
              {
                  "locale": "fr",
                  "content": "Contact"
              },
              {
                  "locale": "es",
                  "content": "Contacto"
              },
              {
                  "locale": "ne",
                  "content": "सम्पर्क व्यक्ति"
              },
              {
                  "locale": "sw",
                  "content": "kuwasiliana na"
              }
          ]
      },
      {
          "key": "From",
          "default": "From",
          "translations": [
              {
                  "locale": "en",
                  "content": "From"
              },
              {
                  "locale": "fr",
                  "content": "De"
              },
              {
                  "locale": "es",
                  "content": "De"
              },
              {
                  "locale": "ne",
                  "content": "पठाउने"
              },
              {
                  "locale": "sw",
                  "content": "kutoka"
              }
          ]
      },
      {
          "key": "Clinic",
          "default": "Community Health Worker",
          "translations": [
              {
                  "locale": "en",
                  "content": "Community Health Worker"
              },
              {
                  "locale": "fr",
                  "content": "Agent de santé"
              },
              {
                  "locale": "es",
                  "content": "Agento de salud"
              },
              {
                  "locale": "ne",
                  "content": "सामुदायिक स्वास्थ्यकर्मि"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "Clinics",
          "default": "Community Health Workers",
          "translations": [
              {
                  "locale": "en",
                  "content": "Community Health Workers"
              },
              {
                  "locale": "fr",
                  "content": "Agents de santé"
              },
              {
                  "locale": "es",
                  "content": "Agento de salud"
              },
              {
                  "locale": "ne",
                  "content": "सामुदायिक स्वास्थ्यकर्मि"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "Village Name",
          "default": "Town",
          "translations": [
              {
                  "locale": "en",
                  "content": "Town"
              },
              {
                  "locale": "fr",
                  "content": "Ville"
              },
              {
                  "locale": "es",
                  "content": "Ciudia"
              },
              {
                  "locale": "ne",
                  "content": "गाउँ"
              },
              {
                  "locale": "sw",
                  "content": "Jina kijiji"
              }
          ]
      },
      {
          "key": "Clinic Contact Name",
          "default": "Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom"
              },
              {
                  "locale": "es",
                  "content": "Nombre"
              },
              {
                  "locale": "ne",
                  "content": "सम्पर्क व्यक्ति"
              },
              {
                  "locale": "sw",
                  "content": "Kliniki ya Mawasiliano Jina"
              }
          ]
      },
      {
          "key": "Clinic Contact Phone",
          "default": "Phone number",
          "translations": [
              {
                  "locale": "en",
                  "content": "Phone number"
              },
              {
                  "locale": "fr",
                  "content": "Téléphone"
              },
              {
                  "locale": "es",
                  "content": "Teléfono"
              },
              {
                  "locale": "ne",
                  "content": "सम्पर्क टेलिफोन"
              },
              {
                  "locale": "sw",
                  "content": "Namba ya Simu"
              }
          ]
      },
      {
          "key": "RC Code",
          "default": "Code",
          "translations": [
              {
                  "locale": "en",
                  "content": "Code"
              },
              {
                  "locale": "fr",
                  "content": "Code"
              },
              {
                  "locale": "es",
                  "content": "Código"
              },
              {
                  "locale": "ne",
                  "content": "कोड"
              },
              {
                  "locale": "sw",
                  "content": "RC Kanuni"
              }
          ]
      },
      {
          "key": "Health Centers",
          "default": "Health Centers",
          "translations": [
              {
                  "locale": "en",
                  "content": "Health Centers"
              },
              {
                  "locale": "fr",
                  "content": "Centres de santé"
              },
              {
                  "locale": "es",
                  "content": "Centros de Salud"
              },
              {
                  "locale": "ne",
                  "content": "स्वास्थ्य संस्था"
              },
              {
                  "locale": "sw",
                  "content": "Kituo cha Afya cha"
              }
          ]
      },
      {
          "key": "Health Center",
          "default": "Health Center",
          "translations": [
              {
                  "locale": "en",
                  "content": "Health Center"
              },
              {
                  "locale": "fr",
                  "content": "Centre de santé"
              },
              {
                  "locale": "es",
                  "content": "Centro de Salud"
              },
              {
                  "locale": "ne",
                  "content": "स्वास्थ्य संस्था"
              },
              {
                  "locale": "sw",
                  "content": "Kituo cha Afya cha"
              }
          ]
      },
      {
          "key": "Health Center Name",
          "default": "Health Center Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Health Center Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom du centre de santé"
              },
              {
                  "locale": "es",
                  "content": "Nombre del centro de salud"
              },
              {
                  "locale": "ne",
                  "content": "स्वास्थ्य संस्थाको नाम"
              },
              {
                  "locale": "sw",
                  "content": "Kituo cha Afya cha Jina"
              }
          ]
      },
      {
          "key": "Health Center Contact Name",
          "default": "Contact Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Contact Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom du contact"
              },
              {
                  "locale": "es",
                  "content": "Nombre del contacto"
              },
              {
                  "locale": "ne",
                  "content": "सम्पर्क व्यक्ति"
              },
              {
                  "locale": "sw",
                  "content": "Kituo cha Afya cha Mawasiliano Jina"
              }
          ]
      },
      {
          "key": "Health Center Contact Phone",
          "default": "Phone number",
          "translations": [
              {
                  "locale": "en",
                  "content": "Phone number"
              },
              {
                  "locale": "fr",
                  "content": "Téléphone"
              },
              {
                  "locale": "es",
                  "content": "Teléfono"
              },
              {
                  "locale": "ne",
                  "content": "सम्पर्क टेलिफोन"
              },
              {
                  "locale": "sw",
                  "content": "Namba ya Simu"
              }
          ]
      },
      {
          "key": "District Hospital",
          "default": "District",
          "translations": [
              {
                  "locale": "en",
                  "content": "District"
              },
              {
                  "locale": "fr",
                  "content": "District"
              },
              {
                  "locale": "es",
                  "content": "Distrito"
              },
              {
                  "locale": "ne",
                  "content": "जिल्ला​"
              },
              {
                  "locale": "sw",
                  "content": "Wilaya ya"
              }
          ]
      },
      {
          "key": "District",
          "default": "District",
          "translations": [
              {
                  "locale": "en",
                  "content": "District"
              },
              {
                  "locale": "fr",
                  "content": "District"
              },
              {
                  "locale": "es",
                  "content": "Distrito"
              },
              {
                  "locale": "ne",
                  "content": "जिल्ला​"
              },
              {
                  "locale": "sw",
                  "content": "Wilaya ya"
              }
          ]
      },
      {
          "key": "District Name",
          "default": "District Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "District Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom du district"
              },
              {
                  "locale": "es",
                  "content": "Nombre del distrito"
              },
              {
                  "locale": "ne",
                  "content": "जिल्लाको नाम"
              },
              {
                  "locale": "sw",
                  "content": "Wilaya ya Jina"
              }
          ]
      },
      {
          "key": "District Contact Name",
          "default": "Contact Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Contact Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom du contact"
              },
              {
                  "locale": "es",
                  "content": "Nombre del contacto"
              },
              {
                  "locale": "ne",
                  "content": "सम्पर्क व्यक्ति"
              },
              {
                  "locale": "sw",
                  "content": "Wilaya ya Mawasiliano Jina"
              }
          ]
      },
      {
          "key": "District Contact Phone",
          "default": "Phone number",
          "translations": [
              {
                  "locale": "en",
                  "content": "Phone number"
              },
              {
                  "locale": "fr",
                  "content": "Téléphone"
              },
              {
                  "locale": "es",
                  "content": "Teléfono"
              },
              {
                  "locale": "ne",
                  "content": "सम्पर्क टेलिफोन"
              },
              {
                  "locale": "sw",
                  "content": "Namba ya Simu"
              }
          ]
      },
      {
          "key": "Phone",
          "default": "Phone",
          "translations": [
              {
                  "locale": "en",
                  "content": "Phone"
              },
              {
                  "locale": "fr",
                  "content": "Téléphone"
              },
              {
                  "locale": "es",
                  "content": "Teléfono"
              },
              {
                  "locale": "ne",
                  "content": "टेलिफोन"
              },
              {
                  "locale": "sw",
                  "content": "Simu"
              }
          ]
      },
      {
          "key": "Export",
          "default": "Export",
          "translations": [
              {
                  "locale": "en",
                  "content": "Export"
              },
              {
                  "locale": "fr",
                  "content": "Exporter"
              },
              {
                  "locale": "es",
                  "content": "Exportar"
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": "Kuuza nje"
              }
          ]
      },
      {
          "key": "Activity",
          "default": "Activity",
          "translations": [
              {
                  "locale": "en",
                  "content": "Activity"
              },
              {
                  "locale": "fr",
                  "content": "Activité"
              },
              {
                  "locale": "es",
                  "content": "Actividad"
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": "Shughuli"
              }
          ]
      },
      {
          "key": "Facilities",
          "default": "Facilities",
          "translations": [
              {
                  "locale": "en",
                  "content": "Facilities"
              },
              {
                  "locale": "fr",
                  "content": "Equipements"
              },
              {
                  "locale": "es",
                  "content": "Comodidades"
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": "Vifaa"
              }
          ]
      },
      {
          "key": "Reporting Rates",
          "default": "Reporting Rates",
          "translations": [
              {
                  "locale": "en",
                  "content": "Reporting Rates"
              },
              {
                  "locale": "fr",
                  "content": "Déclaration des taux de"
              },
              {
                  "locale": "es",
                  "content": "Informes de Cambio"
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": "Taarifa ya Viwango"
              }
          ]
      },
      {
          "key": "sys.recipient_not_found",
          "default": "Could not find message recipient.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Could not find message recipient."
              },
              {
                  "locale": "fr",
                  "content": "Le recipient du message n'a pas été trouvé."
              },
              {
                  "locale": "es",
                  "content": "No se encontro destinatario para el mensaje."
              },
              {
                  "locale": "ne",
                  "content": "सन्देश​ पाउने व्यक्ति पत्ता लगाउन असफल।​"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "sys.missing_fields",
          "default": "Missing or invalid fields: {{fields}}.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Missing or invalid fields: {{fields}}."
              },
              {
                  "locale": "fr",
                  "content": "Champs invalides ou manquants: {{fields}}."
              },
              {
                  "locale": "es",
                  "content": "Campo invalido o faltante: {{fields}}."
              },
              {
                  "locale": "ne",
                  "content": "फारम पूरा  ​नभएको या नमिलेको​।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "missing_fields",
          "default": "Missing or invalid fields: {{fields}}.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Missing or invalid fields: {{fields}}."
              },
              {
                  "locale": "fr",
                  "content": "Champs invalides ou manquants: {{fields}}."
              },
              {
                  "locale": "es",
                  "content": "Campo invalido o faltante: {{fields}}."
              },
              {
                  "locale": "ne",
                  "content": "फारम पूरा ​नभएको या नमिलेको​।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "extra_fields",
          "default": "Extra fields.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Extra fields."
              },
              {
                  "locale": "fr",
                  "content": "Champs additionels."
              },
              {
                  "locale": "es",
                  "content": "Campos extra."
              },
              {
                  "locale": "ne",
                  "content": "फारममा भर्नुपर्ने भन्दा अतिरिक्त कुरा भरिएको।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "sys.form_not_found",
          "default": "Form '{{form}}' not found.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Form '{{form}}' not found."
              },
              {
                  "locale": "fr",
                  "content": "Formulaire '{{form}}' non trouvé"
              },
              {
                  "locale": "es",
                  "content": "Forma no encontrada."
              },
              {
                  "locale": "ne",
                  "content": "फारम भेटिएन।​"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "form_not_found",
          "default": "The form sent '{{form}}' was not recognized. Please complete it again and resend. If this problem persists contact your supervisor.",
          "translations": [
              {
                  "locale": "en",
                  "content": "The form sent '{{form}}' was not recognized. Please complete it again and resend. If this problem persists contact your supervisor."
              },
              {
                  "locale": "fr",
                  "content": "Le formulaire envoyé '{{form}}' n'est pas reconnu, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur."
              },
              {
                  "locale": "es",
                  "content": "No se reconocio el reporte enviado '{{form}}'. Por favor intente de nuevo. Si el problema persiste, informe al director."
              },
              {
                  "locale": "ne",
                  "content": "फारम मिलेन​। कृपया फेरि प्रयास गर्नुहोला।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "form_invalid",
          "default": "The form sent '{{form}}' was not properly completed. Please complete it and resend. If this problem persists contact your supervisor.",
          "translations": [
              {
                  "locale": "en",
                  "content": "The form sent '{{form}}' was not properly completed. Please complete it and resend. If this problem persists contact your supervisor."
              },
              {
                  "locale": "fr",
                  "content": "Le formulaire envoyé '{{form}}' n'est pas complet, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur."
              },
              {
                  "locale": "es",
                  "content": "No se completo el reporte '{{form}}'. Por favor completelo y vuelvalo a enviar. Si el problema persiste, informe al director."
              },
              {
                  "locale": "ne",
                  "content": "फारम ​पूरा भएन​। कृपया फेरि प्रयास गर्नुहोला।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "form_invalid_custom",
          "default": "The form sent '{{form}}' was not properly completed. Please complete it and resend. If this problem persists contact your supervisor.",
          "translations": [
              {
                  "locale": "en",
                  "content": "The form sent '{{form}}' was not properly completed. Please complete it and resend. If this problem persists contact your supervisor."
              },
              {
                  "locale": "fr",
                  "content": "Le formulaire envoyé '{{form}}' n'est pas complet, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur."
              },
              {
                  "locale": "es",
                  "content": "No se completo el reporte '{{form}}'. Por favor completelo y vuelvalo a enviar. Si el problema persiste, informe al director."
              },
              {
                  "locale": "ne",
                  "content": "फारम  ​पूरा भएन​। कृपया फेरि प्रयास गर्नुहोला।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "sys.facility_not_found",
          "default": "Facility not found.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Facility not found."
              },
              {
                  "locale": "fr",
                  "content": "Établissement non trouvé."
              },
              {
                  "locale": "es",
                  "content": "No se encontro a la unidad de salud."
              },
              {
                  "locale": "ne",
                  "content": "सम्बन्धित स्वास्थ्य संस्था पत्ता लगाउन असफल।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "sys.empty",
          "default": "Message appears empty.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Message appears empty."
              },
              {
                  "locale": "fr",
                  "content": "Le message recu est vide."
              },
              {
                  "locale": "es",
                  "content": "El mensaje esta en blanco."
              },
              {
                  "locale": "ne",
                  "content": "सन्देश​ खाली छ।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "empty",
          "default": "It looks like you sent an empty message, please try to resend. If you continue to have this problem please contact your supervisor.",
          "translations": [
              {
                  "locale": "en",
                  "content": "It looks like you sent an empty message, please try to resend. If you continue to have this problem please contact your supervisor."
              },
              {
                  "locale": "fr",
                  "content": "Nous avons des troubles avec votre message, SVP renvoyer. Si vous continuez à avoir des problèmes contactez votre superviseur."
              },
              {
                  "locale": "es",
                  "content": "El mensaje esta en blanco, por favor reenvielo. Si encuentra un problema, informe al director."
              },
              {
                  "locale": "ne",
                  "content": "सन्देश​ खाली छ​ । कृपया फेरि प्रयास गर्नुहोला।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "form_received",
          "default": "Your form submission was received, thank you.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Your form submission was received, thank you."
              },
              {
                  "locale": "fr",
                  "content": "Merci, votre formulaire a été bien reçu."
              },
              {
                  "locale": "es",
                  "content": "Recibimos su reporte, muchas gracias."
              },
              {
                  "locale": "ne",
                  "content": "रिपोर्ट​ प्राप्त भयो, धन्यवाद ​।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "sms_received",
          "default": "SMS message received; it will be reviewed shortly. If you were trying to submit a text form, please enter a correct form code and try again.",
          "translations": [
              {
                  "locale": "en",
                  "content": "SMS message received; it will be reviewed shortly. If you were trying to submit a text form, please enter a correct form code and try again."
              },
              {
                  "locale": "fr",
                  "content": "Merci, votre message a été bien reçu."
              },
              {
                  "locale": "es",
                  "content": "Recibimos tu mensaje, lo procesaremos pronto. Si querias mandar un reporte, intentalo nuevamente en el formato adecuado."
              },
              {
                  "locale": "ne",
                  "content": "सन्देश​ प्राप्त भयो। रिपोर्ट पठाउनुभएको हो भने मिलेन; ​पुन:​ पठाउनुहोला।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "reporting_unit_not_found",
          "default": "Reporting Unit ID is incorrect. Please correct and submit a complete report again.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Reporting Unit ID is incorrect. Please correct and submit a complete report again."
              },
              {
                  "locale": "fr",
                  "content": "Établissement non trouvé, svp corriger et renvoyer"
              },
              {
                  "locale": "es",
                  "content": "No encontramos a su centro de salud. Por favor corrijalo y reenvie el reporte."
              },
              {
                  "locale": "ne",
                  "content": "रिपोर्टिङ् युनिटको आइ.डि मिलेन। कृपया ​मिलाएर​  ​पुन:​ पठाउनुहोला।"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "_id",
          "default": "Record UUID",
          "translations": [
              {
                  "locale": "en",
                  "content": "Record UUID"
              },
              {
                  "locale": "fr",
                  "content": "Record UUID"
              },
              {
                  "locale": "es",
                  "content": "Record UUID"
              },
              {
                  "locale": "ne",
                  "content": "Record UUID"
              },
              {
                  "locale": "sw",
                  "content": "Record UUID"
              }
          ]
      },
      {
          "key": "patient_id",
          "default": "Patient ID",
          "translations": [
              {
                  "locale": "en",
                  "content": "Patient ID"
              },
              {
                  "locale": "fr",
                  "content": "Patient ID"
              },
              {
                  "locale": "es",
                  "content": "Patient ID"
              },
              {
                  "locale": "ne",
                  "content": "Patient ID"
              },
              {
                  "locale": "sw",
                  "content": "Patient ID"
              }
          ]
      },
      {
          "key": "reported_date",
          "default": "Reported Date",
          "translations": [
              {
                  "locale": "en",
                  "content": "Reported Date"
              },
              {
                  "locale": "fr",
                  "content": "Date envoyé"
              },
              {
                  "locale": "es",
                  "content": "Fecha de envío"
              },
              {
                  "locale": "ne",
                  "content": "रिपोर्ट पठाएको मिति​"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "related_entities.clinic.name",
          "default": "Clinic Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Clinic Name"
              },
              {
                  "locale": "fr",
                  "content": "Villages"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "related_entities.clinic.contact.name",
          "default": "Clinic Contact Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Clinic Contact Name"
              },
              {
                  "locale": "fr",
                  "content": "Personne-ressource Clinique"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "related_entities.clinic.external_id",
          "default": "Clinic External ID",
          "translations": [
              {
                  "locale": "en",
                  "content": "Clinic External ID"
              }
          ]
      },
      {
          "key": "related_entities.clinic.parent.name",
          "default": "Health Center Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Health Center Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom du centre de santé"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "related_entities.clinic.parent.contact.name",
          "default": "Health Center Contact Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Health Center Contact Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom de la santé Contact Center"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "related_entities.clinic.parent.external_id",
          "default": "Health Center External ID",
          "translations": [
              {
                  "locale": "en",
                  "content": "Health Center External ID"
              }
          ]
      },
      {
          "key": "related_entities.clinic.parent.parent.name",
          "default": "District Hospital Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "District Hospital Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom de l'hôpital de district"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": ""
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "related_entities.clinic.parent.parent.external_id",
          "default": "District Hospital External ID",
          "translations": [
              {
                  "locale": "en",
                  "content": "District Hospital External ID"
              }
          ]
      },
      {
          "key": "related_entities.health_center.name",
          "default": "Health Center Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Health Center Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom du centre de santé"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": "स्वास्थ्य संस्थाको नाम​"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "related_entities.health_center.contact.name",
          "default": "Health Center Contact Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Health Center Contact Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom de la santé Contact Center"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": "स्वास्थ्य संस्थाको सम्पर्क व्यक्ति"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "related_entities.health_center.parent.name",
          "default": "District Hospital Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "District Hospital Name"
              },
              {
                  "locale": "fr",
                  "content": "Nom de l'hôpital de district"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": "जिल्ला अस्पतालको नाम"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "tasks.0.state",
          "default": "State",
          "translations": [
              {
                  "locale": "en",
                  "content": "State"
              },
              {
                  "locale": "fr",
                  "content": "State"
              },
              {
                  "locale": "es",
                  "content": "State"
              },
              {
                  "locale": "ne",
                  "content": "State"
              },
              {
                  "locale": "sw",
                  "content": "State"
              }
          ]
      },
      {
          "key": "tasks.0.timestamp",
          "default": "Timestamp",
          "translations": [
              {
                  "locale": "en",
                  "content": "Timestamp"
              },
              {
                  "locale": "fr",
                  "content": "Timestamp"
              },
              {
                  "locale": "es",
                  "content": "Timestamp"
              },
              {
                  "locale": "ne",
                  "content": "Timestamp"
              },
              {
                  "locale": "sw",
                  "content": "Timestamp"
              }
          ]
      },
      {
          "key": "tasks.0.messages.0.to",
          "default": "To",
          "translations": [
              {
                  "locale": "en",
                  "content": "To"
              },
              {
                  "locale": "fr",
                  "content": "pour"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": "पाउने"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "tasks.0.messages.0.message",
          "default": "Message",
          "translations": [
              {
                  "locale": "en",
                  "content": "Message"
              },
              {
                  "locale": "fr",
                  "content": "Message"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": "सन्देश"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "from",
          "default": "Reported From",
          "translations": [
              {
                  "locale": "en",
                  "content": "Reported From"
              },
              {
                  "locale": "fr",
                  "content": "Envoyé par"
              },
              {
                  "locale": "es",
                  "content": "De"
              },
              {
                  "locale": "ne",
                  "content": "पठाउने"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "sent_timestamp",
          "default": "Sent Timestamp",
          "translations": [
              {
                  "locale": "en",
                  "content": "Sent Timestamp"
              },
              {
                  "locale": "fr",
                  "content": "Date"
              },
              {
                  "locale": "es",
                  "content": "Fecha"
              },
              {
                  "locale": "ne",
                  "content": "​रिपोर्ट पठाएको समय"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "daysoverdue",
          "default": "Days since patient visit",
          "translations": [
              {
                  "locale": "en",
                  "content": "Days since patient visit"
              },
              {
                  "locale": "fr",
                  "content": "Jours depuis visite du patient"
              },
              {
                  "locale": "es",
                  "content": ""
              },
              {
                  "locale": "ne",
                  "content": "बिरामीलाई भेटेको कति दिन भयो?​"
              },
              {
                  "locale": "sw",
                  "content": ""
              }
          ]
      },
      {
          "key": "Patient ID",
          "default": "Patient ID",
          "translations": [
              {
                  "locale": "en",
                  "content": "Patient ID"
              },
              {
                  "locale": "fr",
                  "content": "Patient ID"
              },
              {
                  "locale": "es",
                  "content": "Patient ID"
              },
              {
                  "locale": "ne",
                  "content": "Patient ID"
              },
              {
                  "locale": "sw",
                  "content": "Patient ID"
              }
          ]
      },
      {
          "key": "responses",
          "default": "Responses",
          "translations": [
              {
                  "locale": "en",
                  "content": "Responses"
              },
              {
                  "locale": "fr",
                  "content": "Responses"
              },
              {
                  "locale": "es",
                  "content": "Responses"
              },
              {
                  "locale": "ne",
                  "content": "Responses"
              },
              {
                  "locale": "sw",
                  "content": "Responses"
              }
          ]
      },
      {
          "key": "sms_message.message",
          "default": "Incoming Message",
          "translations": [
              {
                  "locale": "en",
                  "content": "Incoming Message"
              },
              {
                  "locale": "fr",
                  "content": "Incoming Message"
              },
              {
                  "locale": "es",
                  "content": "Incoming Message"
              },
              {
                  "locale": "ne",
                  "content": "Incoming Message"
              },
              {
                  "locale": "sw",
                  "content": "Incoming Message"
              }
          ]
      },
      {
          "key": "tasks",
          "default": "Outgoing Messages",
          "translations": [
              {
                  "locale": "en",
                  "content": "Outgoing Messages"
              },
              {
                  "locale": "fr",
                  "content": "Outgoing Messages"
              },
              {
                  "locale": "es",
                  "content": "Outgoing Messages"
              },
              {
                  "locale": "ne",
                  "content": "Outgoing Messages"
              },
              {
                  "locale": "sw",
                  "content": "Outgoing Messages"
              }
          ]
      },
      {
          "key": "scheduled_tasks",
          "default": "Scheduled Tasks",
          "translations": [
              {
                  "locale": "en",
                  "content": "Scheduled Tasks"
              },
              {
                  "locale": "fr",
                  "content": "Scheduled Tasks"
              },
              {
                  "locale": "es",
                  "content": "Scheduled Tasks"
              },
              {
                  "locale": "ne",
                  "content": "Scheduled Tasks"
              },
              {
                  "locale": "sw",
                  "content": "Scheduled Tasks"
              }
          ]
      },
      {
          "key": "Search",
          "default": "Search",
          "translations": [
              {
                  "locale": "en",
                  "content": "Search"
              },
              {
                  "locale": "fr",
                  "content": "Search"
              },
              {
                  "locale": "es",
                  "content": "Search"
              },
              {
                  "locale": "ne",
                  "content": "Search"
              },
              {
                  "locale": "sw",
                  "content": "Search"
              }
          ]
      },
      {
          "key": "pending",
          "default": "Pending Timestamp",
          "translations": [
              {
                  "locale": "en",
                  "content": "Pending Timestamp"
              }
          ]
      },
      {
          "key": "scheduled",
          "default": "Scheduled Timestamp",
          "translations": [
              {
                  "locale": "en",
                  "content": "Scheduled Timestamp"
              }
          ]
      },
      {
          "key": "received",
          "default": "Received Timestamp",
          "translations": [
              {
                  "locale": "en",
                  "content": "Received Timestamp"
              }
          ]
      },
      {
          "key": "sent",
          "default": "Sent Timestamp",
          "translations": [
              {
                  "locale": "en",
                  "content": "Sent Timestamp"
              }
          ]
      },
      {
          "key": "cleared",
          "default": "Cleared Timestamp",
          "translations": [
              {
                  "locale": "en",
                  "content": "Cleared Timestamp"
              }
          ]
      },
      {
          "key": "muted",
          "default": "Muted Timestamp",
          "translations": [
              {
                  "locale": "en",
                  "content": "Muted Timestamp"
              }
          ]
      },
      {
          "key": "task.type",
          "default": "Message Type",
          "translations": [
              {
                  "locale": "en",
                  "content": "Message Type"
              }
          ]
      },
      {
          "key": "task.state",
          "default": "Message State",
          "translations": [
              {
                  "locale": "en",
                  "content": "Message State"
              }
          ]
      },
      {
          "key": "Reply",
          "default": "Reply",
          "translations": [
              {
                  "locale": "en",
                  "content": "Reply"
              }
          ]
      },
      {
          "key": "Verify",
          "default": "Verify",
          "translations": [
              {
                  "locale": "en",
                  "content": "Verify"
              }
          ]
      },
      {
          "key": "Unverify",
          "default": "Unverify",
          "translations": [
              {
                  "locale": "en",
                  "content": "Unverify"
              }
          ]
      },
      {
          "key": "Delete",
          "default": "Delete",
          "translations": [
              {
                  "locale": "en",
                  "content": "Delete"
              }
          ]
      },
      {
          "key": "Edit",
          "default": "Edit",
          "translations": [
              {
                  "locale": "en",
                  "content": "Edit"
              }
          ]
      },
      {
          "key": "Send Message",
          "default": "Send Message",
          "translations": [
              {
                  "locale": "en",
                  "content": "Send Message"
              }
          ]
      },
      {
          "key": "Submit Report",
          "default": "Submit Report",
          "translations": [
              {
                  "locale": "en",
                  "content": "Submit Report"
              }
          ]
      },
      {
          "key": "Easy Setup Wizard",
          "default": "Easy Setup Wizard",
          "translations": [
              {
                  "locale": "en",
                  "content": "Easy Setup Wizard"
              }
          ]
      },
      {
          "key": "Guided Tour",
          "default": "Guided Tour",
          "translations": [
              {
                  "locale": "en",
                  "content": "Guided Tour"
              }
          ]
      },
      {
          "key": "Edit User Profile",
          "default": "Edit User Profile",
          "translations": [
              {
                  "locale": "en",
                  "content": "Edit User Profile"
              }
          ]
      },
      {
          "key": "Configuration",
          "default": "Configuration",
          "translations": [
              {
                  "locale": "en",
                  "content": "Configuration"
              }
          ]
      },
      {
          "key": "Report Bug",
          "default": "Report Bug",
          "translations": [
              {
                  "locale": "en",
                  "content": "Report Bug"
              }
          ]
      },
      {
          "key": "Log Out",
          "default": "Log Out",
          "translations": [
              {
                  "locale": "en",
                  "content": "Log Out"
              }
          ]
      },
      {
          "key": "Messages",
          "default": "Messages",
          "translations": [
              {
                  "locale": "en",
                  "content": "Messages"
              }
          ]
      },
      {
          "key": "Reports",
          "default": "Reports",
          "translations": [
              {
                  "locale": "en",
                  "content": "Reports"
              }
          ]
      },
      {
          "key": "Analytics",
          "default": "Analytics",
          "translations": [
              {
                  "locale": "en",
                  "content": "Analytics"
              }
          ]
      },
      {
          "key": "Back",
          "default": "Back",
          "translations": [
              {
                  "locale": "en",
                  "content": "Back"
              }
          ]
      },
      {
          "key": "All facilities",
          "default": "All facilities",
          "translations": [
              {
                  "locale": "en",
                  "content": "All facilities"
              }
          ]
      },
      {
          "key": "Number of facilities",
          "default": "{{number}} facilities",
          "translations": [
              {
                  "locale": "en",
                  "content": "{{number}} facilities"
              }
          ]
      },
      {
          "key": "All form types",
          "default": "All form types",
          "translations": [
              {
                  "locale": "en",
                  "content": "All form types"
              }
          ]
      },
      {
          "key": "Number of form types",
          "default": "{{number}} form types",
          "translations": [
              {
                  "locale": "en",
                  "content": "{{number}} form types"
              }
          ]
      },
      {
          "key": "Any date",
          "default": "Any date",
          "translations": [
              {
                  "locale": "en",
                  "content": "Any date"
              }
          ]
      },
      {
          "key": "Validity",
          "default": "Validity",
          "translations": [
              {
                  "locale": "en",
                  "content": "Validity"
              }
          ]
      },
      {
          "key": "Valid",
          "default": "Valid",
          "translations": [
              {
                  "locale": "en",
                  "content": "Valid"
              }
          ]
      },
      {
          "key": "Invalid",
          "default": "Invalid",
          "translations": [
              {
                  "locale": "en",
                  "content": "Invalid"
              }
          ]
      },
      {
          "key": "Verification",
          "default": "Verification",
          "translations": [
              {
                  "locale": "en",
                  "content": "Verification"
              }
          ]
      },
      {
          "key": "Verified",
          "default": "Verified",
          "translations": [
              {
                  "locale": "en",
                  "content": "Verified"
              }
          ]
      },
      {
          "key": "Unverified",
          "default": "Unverified",
          "translations": [
              {
                  "locale": "en",
                  "content": "Unverified"
              }
          ]
      },
      {
          "key": "Extra search words",
          "default": "Extra search words",
          "translations": [
              {
                  "locale": "en",
                  "content": "Extra search words"
              }
          ]
      },
      {
          "key": "Clear all filters",
          "default": "Clear all filters",
          "translations": [
              {
                  "locale": "en",
                  "content": "Clear all filters"
              }
          ]
      },
      {
          "key": "Error fetching messages",
          "default": "Error fetching messages",
          "translations": [
              {
                  "locale": "en",
                  "content": "Error fetching messages"
              }
          ]
      },
      {
          "key": "No messages found",
          "default": "No messages found",
          "translations": [
              {
                  "locale": "en",
                  "content": "No messages found"
              }
          ]
      },
      {
          "key": "No more messages",
          "default": "No more messages",
          "translations": [
              {
                  "locale": "en",
                  "content": "No more messages"
              }
          ]
      },
      {
          "key": "Unread below",
          "default": "Unread below",
          "translations": [
              {
                  "locale": "en",
                  "content": "Unread below"
              }
          ]
      },
      {
          "key": "Enter message",
          "default": "Enter message",
          "translations": [
              {
                  "locale": "en",
                  "content": "Enter message"
              }
          ]
      },
      {
          "key": "Sending",
          "default": "Sending...",
          "translations": [
              {
                  "locale": "en",
                  "content": "Sending..."
              }
          ]
      },
      {
          "key": "Send",
          "default": "Send",
          "translations": [
              {
                  "locale": "en",
                  "content": "Send"
              }
          ]
      },
      {
          "key": "autoreply",
          "default": "autoreply",
          "translations": [
              {
                  "locale": "en",
                  "content": "autoreply"
              }
          ]
      },
      {
          "key": "state.pending",
          "default": "pending",
          "translations": [
              {
                  "locale": "en",
                  "content": "pending"
              }
          ]
      },
      {
          "key": "state.received",
          "default": "received",
          "translations": [
              {
                  "locale": "en",
                  "content": "received"
              }
          ]
      },
      {
          "key": "state.muted",
          "default": "muted",
          "translations": [
              {
                  "locale": "en",
                  "content": "muted"
              }
          ]
      },
      {
          "key": "state.cleared",
          "default": "cleared",
          "translations": [
              {
                  "locale": "en",
                  "content": "cleared"
              }
          ]
      },
      {
          "key": "state.sent",
          "default": "sent",
          "translations": [
              {
                  "locale": "en",
                  "content": "sent"
              }
          ]
      },
      {
          "key": "state.scheduled",
          "default": "scheduled",
          "translations": [
              {
                  "locale": "en",
                  "content": "scheduled"
              }
          ]
      },
      {
          "key": "select all",
          "default": "select all",
          "translations": [
              {
                  "locale": "en",
                  "content": "select all"
              }
          ]
      },
      {
          "key": "clear",
          "default": "clear",
          "translations": [
              {
                  "locale": "en",
                  "content": "clear"
              }
          ]
      },
      {
          "key": "Cancel",
          "default": "Cancel",
          "translations": [
              {
                  "locale": "en",
                  "content": "Cancel"
              }
          ]
      },
      {
          "key": "Apply",
          "default": "Apply",
          "translations": [
              {
                  "locale": "en",
                  "content": "Apply"
              }
          ]
      },
      {
          "key": "date.from",
          "default": "From",
          "translations": [
              {
                  "locale": "en",
                  "content": "From"
              }
          ]
      },
      {
          "key": "date.to",
          "default": "To",
          "translations": [
              {
                  "locale": "en",
                  "content": "To"
              }
          ]
      },
      {
          "key": "No reports found",
          "default": "No reports found",
          "translations": [
              {
                  "locale": "en",
                  "content": "No reports found"
              }
          ]
      },
      {
          "key": "No more reports",
          "default": "No more reports",
          "translations": [
              {
                  "locale": "en",
                  "content": "No more reports"
              }
          ]
      },
      {
          "key": "Error fetching reports",
          "default": "Error fetching reports",
          "translations": [
              {
                  "locale": "en",
                  "content": "Error fetching reports"
              }
          ]
      },
      {
          "key": "invalid.query",
          "default": "That query is invalid. Read our advanced search help page for more information on query syntax.",
          "translations": [
              {
                  "locale": "en",
                  "content": "That query is invalid. Read our advanced search help page for more information on query syntax."
              }
          ]
      },
      {
          "key": "Help",
          "default": "Help",
          "translations": [
              {
                  "locale": "en",
                  "content": "Help"
              }
          ]
      },
      {
          "key": "Content",
          "default": "Content",
          "translations": [
              {
                  "locale": "en",
                  "content": "Content"
              }
          ]
      },
      {
          "key": "Errors",
          "default": "Errors",
          "translations": [
              {
                  "locale": "en",
                  "content": "Errors"
              }
          ]
      },
      {
          "key": "Automated Reply",
          "default": "Automated Reply",
          "translations": [
              {
                  "locale": "en",
                  "content": "Automated Reply"
              }
          ]
      },
      {
          "key": "Automated Reply",
          "default": "Automated Reply",
          "translations": [
              {
                  "locale": "en",
                  "content": "Automated Reply"
              }
          ]
      },
      {
          "key": "Automated Reply",
          "default": "Automated Reply",
          "translations": [
              {
                  "locale": "en",
                  "content": "Automated Reply"
              }
          ]
      },
      {
          "key": "Mute",
          "default": "Mute",
          "translations": [
              {
                  "locale": "en",
                  "content": "Mute"
              }
          ]
      },
      {
          "key": "Schedule name",
          "default": "Schedule: {{name}}",
          "translations": [
              {
                  "locale": "en",
                  "content": "Schedule: {{name}}"
              }
          ]
      },
      {
          "key": "Add Message",
          "default": "Add Message",
          "translations": [
              {
                  "locale": "en",
                  "content": "Add Message"
              }
          ]
      },
      {
          "key": "Submit",
          "default": "Submit",
          "translations": [
              {
                  "locale": "en",
                  "content": "Submit"
              }
          ]
      },
      {
          "key": "Confirm",
          "default": "Confirm",
          "translations": [
              {
                  "locale": "en",
                  "content": "Confirm"
              }
          ]
      },
      {
          "key": "confirm.delete",
          "default": "Are you sure you want to delete this message?",
          "translations": [
              {
                  "locale": "en",
                  "content": "Are you sure you want to delete this message?"
              }
          ]
      },
      {
          "key": "Full Name",
          "default": "Full Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Full Name"
              }
          ]
      },
      {
          "key": "Email Address",
          "default": "E-mail Address",
          "translations": [
              {
                  "locale": "en",
                  "content": "E-mail Address"
              }
          ]
      },
      {
          "key": "Language",
          "default": "Language",
          "translations": [
              {
                  "locale": "en",
                  "content": "Language"
              }
          ]
      },
      {
          "key": "Phone Number",
          "default": "Phone number",
          "translations": [
              {
                  "locale": "en",
                  "content": "Phone number"
              },
              {
                  "locale": "fr",
                  "content": "Téléphone"
              },
              {
                  "locale": "es",
                  "content": "Teléfono"
              },
              {
                  "locale": "ne",
                  "content": "सम्पर्क टेलिफोन"
              },
              {
                  "locale": "sw",
                  "content": "Namba ya Simu"
              }
          ]
      },
      {
          "key": "Bug description",
          "default": "Bug description",
          "translations": [
              {
                  "locale": "en",
                  "content": "Bug description"
              }
          ]
      },
      {
          "key": "Update Facility",
          "default": "Update Facility",
          "translations": [
              {
                  "locale": "en",
                  "content": "Update Facility"
              }
          ]
      },
      {
          "key": "Start",
          "default": "Start",
          "translations": [
              {
                  "locale": "en",
                  "content": "Start"
              }
          ]
      },
      {
          "key": "welcome",
          "default": "Hello {{name}}",
          "translations": [
              {
                  "locale": "en",
                  "content": "Hello {{name}}"
              }
          ]
      },
      {
          "key": "welcome.description",
          "default": "You can access the guided tour or the easy setup wizard from the settings icon in the upper right.",
          "translations": [
              {
                  "locale": "en",
                  "content": "You can access the guided tour or the easy setup wizard from the settings icon in the upper right."
              }
          ]
      },
      {
          "key": "setup.modem.title",
          "default": "Modem setup",
          "translations": [
              {
                  "locale": "en",
                  "content": "Modem setup"
              }
          ]
      },
      {
          "key": "setup.modem.subtitle",
          "default": "You will need a USB GSM modem with an active SIM card to send and receive text messages.",
          "translations": [
              {
                  "locale": "en",
                  "content": "You will need a USB GSM modem with an active SIM card to send and receive text messages."
              }
          ]
      },
      {
          "key": "setup.contact.title",
          "default": "Identify care coordinators",
          "translations": [
              {
                  "locale": "en",
                  "content": "Identify care coordinators"
              }
          ]
      },
      {
          "key": "setup.contact.subtitle",
          "default": "Select who will be registering and tracking pregnancies in your community.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Select who will be registering and tracking pregnancies in your community."
              }
          ]
      },
      {
          "key": "setup.contact.description",
          "default": "They will need a mobile phone with a texting plan.",
          "translations": [
              {
                  "locale": "en",
                  "content": "They will need a mobile phone with a texting plan."
              }
          ]
      },
      {
          "key": "setup.contact.help",
          "default": "If you don't know what to choose, refer to the ANC user guide.",
          "translations": [
              {
                  "locale": "en",
                  "content": "If you don't know what to choose, refer to the ANC user guide."
              }
          ]
      },
      {
          "key": "setup.language.title",
          "default": "Language preference",
          "translations": [
              {
                  "locale": "en",
                  "content": "Language preference"
              }
          ]
      },
      {
          "key": "setup.language.subtitle",
          "default": "Select the language that your primary point of contact will be using.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Select the language that your primary point of contact will be using."
              }
          ]
      },
      {
          "key": "setup.language.description",
          "default": "If you don't see your language, you can always add a custom language from Administrative Settings.",
          "translations": [
              {
                  "locale": "en",
                  "content": "If you don't see your language, you can always add a custom language from Administrative Settings."
              }
          ]
      },
      {
          "key": "setup.registration.title",
          "default": "Registration form",
          "translations": [
              {
                  "locale": "en",
                  "content": "Registration form"
              }
          ]
      },
      {
          "key": "setup.registration.subtitle",
          "default": "Will your primary point of contact for registration be able to report using Last Menstrual Period (LMP).",
          "translations": [
              {
                  "locale": "en",
                  "content": "Will your primary point of contact for registration be able to report using Last Menstrual Period (LMP)."
              }
          ]
      },
      {
          "key": "setup.registration.description",
          "default": "Women in some cultures may not want to share this information.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Women in some cultures may not want to share this information."
              }
          ]
      },
      {
          "key": "setup.registration.help",
          "default": "If you don't know what to choose, refer to the ANC user guide.",
          "translations": [
              {
                  "locale": "en",
                  "content": "If you don't know what to choose, refer to the ANC user guide."
              }
          ]
      },
      {
          "key": "setup.skip",
          "default": "Skip the setup wizard",
          "translations": [
              {
                  "locale": "en",
                  "content": "Skip the setup wizard"
              }
          ]
      },
      {
          "key": "tour.select",
          "default": "Select Tour",
          "translations": [
              {
                  "locale": "en",
                  "content": "Select Tour"
              }
          ]
      },
      {
          "key": "tour.select.description",
          "default": "You can start a tour at any time by clicking the cog in the top right corner. Which tour would you like to run?",
          "translations": [
              {
                  "locale": "en",
                  "content": "You can start a tour at any time by clicking the cog in the top right corner. Which tour would you like to run?"
              }
          ]
      },
      {
          "key": "Gateway number",
          "default": "Gateway number",
          "translations": [
              {
                  "locale": "en",
                  "content": "Gateway number"
              }
          ]
      },
      {
          "key": "Gateway number help",
          "default": "This is number where mobile reporters should send their reports. It is also the number they will receive messages from.",
          "translations": [
              {
                  "locale": "en",
                  "content": "This is number where mobile reporters should send their reports. It is also the number they will receive messages from."
              }
          ]
      },
      {
          "key": "Default country code",
          "default": "Default country code",
          "translations": [
              {
                  "locale": "en",
                  "content": "Default country code"
              }
          ]
      },
      {
          "key": "Default country code help",
          "default": "Messages without a country code will be assigned this country code.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Messages without a country code will be assigned this country code."
              }
          ]
      },
      {
          "key": "Pregnant patient",
          "default": "The pregnant patient",
          "translations": [
              {
                  "locale": "en",
                  "content": "The pregnant patient"
              }
          ]
      },
      {
          "key": "Facility nurse",
          "default": "Facility nurse",
          "translations": [
              {
                  "locale": "en",
                  "content": "Facility nurse"
              }
          ]
      },
      {
          "key": "Last Menstrual Period",
          "default": "Last Menstrual Period (LMP)",
          "translations": [
              {
                  "locale": "en",
                  "content": "Last Menstrual Period (LMP)"
              }
          ]
      },
      {
          "key": "With",
          "default": "With",
          "translations": [
              {
                  "locale": "en",
                  "content": "With"
              }
          ]
      },
      {
          "key": "Without",
          "default": "Without",
          "translations": [
              {
                  "locale": "en",
                  "content": "Without"
              }
          ]
      },
      {
          "key": "Error saving settings",
          "default": "There was an error saving your settings, please try again.",
          "translations": [
              {
                  "locale": "en",
                  "content": "There was an error saving your settings, please try again."
              }
          ]
      },
      {
          "key": "Generated report field",
          "default": "Generated report field",
          "translations": [
              {
                  "locale": "en",
                  "content": "Generated report field"
              }
          ]
      },
      {
          "key": "birth_date",
          "default": "Birth Date",
          "translations": [
              {
                  "locale": "en",
                  "content": "Birth Date"
              }
          ]
      },
      {
          "key": "mother_outcome",
          "default": "Mother Outcome",
          "translations": [
              {
                  "locale": "en",
                  "content": "Mother Outcome"
              }
          ]
      },
      {
          "key": "child_birth_outcome",
          "default": "Child Birth Outcome",
          "translations": [
              {
                  "locale": "en",
                  "content": "Child Birth Outcome"
              }
          ]
      },
      {
          "key": "child_birth_weight",
          "default": "Child Birth Weight",
          "translations": [
              {
                  "locale": "en",
                  "content": "Child Birth Weight"
              }
          ]
      },
      {
          "key": "child_birth_date",
          "default": "Child Birth Date",
          "translations": [
              {
                  "locale": "en",
                  "content": "Child Birth Date"
              }
          ]
      },
      {
          "key": "expected_date",
          "default": "Expected Date",
          "translations": [
              {
                  "locale": "en",
                  "content": "Expected Date"
              }
          ]
      },
      {
          "key": "Any status",
          "default": "Any status",
          "translations": [
              {
                  "locale": "en",
                  "content": "Any status"
              }
          ]
      },
      {
          "key": "Patient Name",
          "default": "Patient Name",
          "translations": [
              {
                  "locale": "en",
                  "content": "Patient Name"
              }
          ]
      },
      {
          "key": "Weeks Pregnant",
          "default": "Weeks Pregnant",
          "translations": [
              {
                  "locale": "en",
                  "content": "Weeks Pregnant"
              }
          ]
      },
      {
          "key": "Visits",
          "default": "Visits",
          "translations": [
              {
                  "locale": "en",
                  "content": "Visits"
              }
          ]
      },
      {
          "key": "contact.short",
          "default": "CHW",
          "translations": [
              {
                  "locale": "en",
                  "content": "CHW"
              }
          ]
      },
      {
          "key": "EDD",
          "default": "EDD",
          "translations": [
              {
                  "locale": "en",
                  "content": "EDD"
              }
          ]
      },
      {
          "key": "Appointment Date",
          "default": "Appointment Date",
          "translations": [
              {
                  "locale": "en",
                  "content": "Appointment Date"
              }
          ]
      },
      {
          "key": "Patient History",
          "default": "Patient History",
          "translations": [
              {
                  "locale": "en",
                  "content": "Patient History"
              }
          ]
      },
      {
          "key": "Last Appointment",
          "default": "Last Appointment",
          "translations": [
              {
                  "locale": "en",
                  "content": "Last Appointment"
              }
          ]
      },
      {
          "key": "analytics.unconfigured",
          "default": "No analytics modules are configured.",
          "translations": [
              {
                  "locale": "en",
                  "content": "No analytics modules are configured."
              }
          ]
      },
      {
          "key": "analytics.connection.error",
          "default": "Could not retrieve data at this time.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Could not retrieve data at this time."
              }
          ]
      },
      {
          "key": "analytics.anc.active-pregnancies",
          "default": "Active Pregnancies",
          "translations": [
              {
                  "locale": "en",
                  "content": "Active Pregnancies"
              }
          ]
      },
      {
          "key": "analytics.anc.delivery-locations",
          "default": "Reported Delivery Locations",
          "translations": [
              {
                  "locale": "en",
                  "content": "Reported Delivery Locations"
              }
          ]
      },
      {
          "key": "analytics.anc.high-risk",
          "default": "High Risk Pregnancies",
          "translations": [
              {
                  "locale": "en",
                  "content": "High Risk Pregnancies"
              }
          ]
      },
      {
          "key": "analytics.anc.missed-appointments",
          "default": "Recent Missed Appointments",
          "translations": [
              {
                  "locale": "en",
                  "content": "Recent Missed Appointments"
              }
          ]
      },
      {
          "key": "analytics.anc.missing-reports",
          "default": "Missing Birth Reports",
          "translations": [
              {
                  "locale": "en",
                  "content": "Missing Birth Reports"
              }
          ]
      },
      {
          "key": "analytics.anc.monthly-births",
          "default": "Monthly Births",
          "translations": [
              {
                  "locale": "en",
                  "content": "Monthly Births"
              }
          ]
      },
      {
          "key": "analytics.anc.monthly-registrations",
          "default": "Monthly Pregnancies Registered",
          "translations": [
              {
                  "locale": "en",
                  "content": "Monthly Pregnancies Registered"
              }
          ]
      },
      {
          "key": "analytics.anc.total-births",
          "default": "Total Births",
          "translations": [
              {
                  "locale": "en",
                  "content": "Total Births"
              }
          ]
      },
      {
          "key": "analytics.anc.upcoming-appointments",
          "default": "Upcoming Appointments",
          "translations": [
              {
                  "locale": "en",
                  "content": "Upcoming Appointments"
              }
          ]
      },
      {
          "key": "analytics.anc.upcoming-edds",
          "default": "Women With Upcoming EDDs",
          "translations": [
              {
                  "locale": "en",
                  "content": "Women With Upcoming EDDs"
              }
          ]
      },
      {
          "key": "analytics.anc.visits-completed",
          "default": "Visits Completed During Pregnancy",
          "translations": [
              {
                  "locale": "en",
                  "content": "Visits Completed During Pregnancy"
              }
          ]
      },
      {
          "key": "analytics.anc.visits-completed.description",
          "default": "Completed pregnancies that have had...",
          "translations": [
              {
                  "locale": "en",
                  "content": "Completed pregnancies that have had..."
              }
          ]
      },
      {
          "key": "analytics.anc.visits-during",
          "default": "Visits Completed So Far",
          "translations": [
              {
                  "locale": "en",
                  "content": "Visits Completed So Far"
              }
          ]
      },
      {
          "key": "analytics.anc.visits-during.description",
          "default": "Active pregnancies that have had...",
          "translations": [
              {
                  "locale": "en",
                  "content": "Active pregnancies that have had..."
              }
          ]
      },
      {
          "key": "Previous",
          "default": "Prev",
          "translations": [
              {
                  "locale": "en",
                  "content": "Prev"
              }
          ]
      },
      {
          "key": "Next",
          "default": "Next",
          "translations": [
              {
                  "locale": "en",
                  "content": "Next"
              }
          ]
      },
      {
          "key": "End tour",
          "default": "End tour",
          "translations": [
              {
                  "locale": "en",
                  "content": "End tour"
              }
          ]
      },
      {
          "key": "tour.messages.unstructured.title",
          "default": "Unstructured Messages",
          "translations": [
              {
                  "locale": "en",
                  "content": "Unstructured Messages"
              }
          ]
      },
      {
          "key": "tour.messages.unstructured.description",
          "default": "Here you can communicate with patients, community health workers, and community members to schedule trainings, ask and respond to questions, and provide additional information — just like regular SMS. You can also send bulk messages to groups of people.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Here you can communicate with patients, community health workers, and community members to schedule trainings, ask and respond to questions, and provide additional information — just like regular SMS. You can also send bulk messages to groups of people."
              }
          ]
      },
      {
          "key": "tour.messages.list.title",
          "default": "Message Contacts List",
          "translations": [
              {
                  "locale": "en",
                  "content": "Message Contacts List"
              }
          ]
      },
      {
          "key": "tour.messages.list.description",
          "default": "This is a list of all your message contacts with the most recent one on top. The light blue highlight indicates which message is being displayed on the right. If the name is bold it means you haven't read one or more messages with this contact.",
          "translations": [
              {
                  "locale": "en",
                  "content": "This is a list of all your message contacts with the most recent one on top. The light blue highlight indicates which message is being displayed on the right. If the name is bold it means you haven't read one or more messages with this contact."
              }
          ]
      },
      {
          "key": "tour.messages.exchange.title",
          "default": "Message Exchange",
          "translations": [
              {
                  "locale": "en",
                  "content": "Message Exchange"
              }
          ]
      },
      {
          "key": "tour.messages.exchange.description",
          "default": "This pane shows the exchange of messages from the selected health worker or phone number on the left.",
          "translations": [
              {
                  "locale": "en",
                  "content": "This pane shows the exchange of messages from the selected health worker or phone number on the left."
              }
          ]
      },
      {
          "key": "tour.messages.contact.title",
          "default": "Contact's Information",
          "translations": [
              {
                  "locale": "en",
                  "content": "Contact's Information"
              }
          ]
      },
      {
          "key": "tour.messages.contact.description",
          "default": "This bar contains the contact's name and phone number on the left, and their location on the right.",
          "translations": [
              {
                  "locale": "en",
                  "content": "This bar contains the contact's name and phone number on the left, and their location on the right."
              }
          ]
      },
      {
          "key": "tour.messages.outgoing.title",
          "default": "Outgoing Messages",
          "translations": [
              {
                  "locale": "en",
                  "content": "Outgoing Messages"
              }
          ]
      },
      {
          "key": "tour.messages.outgoing.description",
          "default": "The blue border indicates an outgoing message sent by you, another user, or an automated message from Medic Mobile.",
          "translations": [
              {
                  "locale": "en",
                  "content": "The blue border indicates an outgoing message sent by you, another user, or an automated message from Medic Mobile."
              }
          ]
      },
      {
          "key": "tour.messages.incoming.title",
          "default": "Incoming Messages",
          "translations": [
              {
                  "locale": "en",
                  "content": "Incoming Messages"
              }
          ]
      },
      {
          "key": "tour.messages.incoming.description",
          "default": "The yellow border indicates an incoming message sent by the selected contact.",
          "translations": [
              {
                  "locale": "en",
                  "content": "The yellow border indicates an incoming message sent by the selected contact."
              }
          ]
      },
      {
          "key": "tour.messages.send.title",
          "default": "Send Message To Contact",
          "translations": [
              {
                  "locale": "en",
                  "content": "Send Message To Contact"
              }
          ]
      },
      {
          "key": "tour.messages.send.description",
          "default": "Use this box to quickly send an SMS message to the contact.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Use this box to quickly send an SMS message to the contact."
              }
          ]
      },
      {
          "key": "tour.reports.forms.title",
          "default": "Report Forms",
          "translations": [
              {
                  "locale": "en",
                  "content": "Report Forms"
              }
          ]
      },
      {
          "key": "tour.reports.forms.description",
          "default": "All of the reports submitted by community health workers live here. Depending on how you are using Medic Mobile in your community, these reports may be for pregnancy registrations, completed visits, or stock outs.",
          "translations": [
              {
                  "locale": "en",
                  "content": "All of the reports submitted by community health workers live here. Depending on how you are using Medic Mobile in your community, these reports may be for pregnancy registrations, completed visits, or stock outs."
              }
          ]
      },
      {
          "key": "tour.reports.types-filter.title",
          "default": "Form Types Filter",
          "translations": [
              {
                  "locale": "en",
                  "content": "Form Types Filter"
              }
          ]
      },
      {
          "key": "tour.reports.types-filter.description",
          "default": "Select one or more form types to filter the list of reports to only those for the chosen forms.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Select one or more form types to filter the list of reports to only those for the chosen forms."
              }
          ]
      },
      {
          "key": "tour.reports.facilities-filter.title",
          "default": "Facilities Filter",
          "translations": [
              {
                  "locale": "en",
                  "content": "Facilities Filter"
              }
          ]
      },
      {
          "key": "tour.reports.facilities-filter.description",
          "default": "Select one or more facilities to filter the list of reports to only those from the chosen facilities.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Select one or more facilities to filter the list of reports to only those from the chosen facilities."
              }
          ]
      },
      {
          "key": "tour.reports.date-filter.title",
          "default": "Date Range Filter",
          "translations": [
              {
                  "locale": "en",
                  "content": "Date Range Filter"
              }
          ]
      },
      {
          "key": "tour.reports.date-filter.description",
          "default": "To view reports within a specified date range, select a start and ending date.",
          "translations": [
              {
                  "locale": "en",
                  "content": "To view reports within a specified date range, select a start and ending date."
              }
          ]
      },
      {
          "key": "tour.reports.status-filter.title",
          "default": "Status Filter",
          "translations": [
              {
                  "locale": "en",
                  "content": "Status Filter"
              }
          ]
      },
      {
          "key": "tour.reports.status-filter.description",
          "default": "To filter by validity or verification, select one or more options.",
          "translations": [
              {
                  "locale": "en",
                  "content": "To filter by validity or verification, select one or more options."
              }
          ]
      },
      {
          "key": "tour.reports.freetext-filter.title",
          "default": "Freetext Filter",
          "translations": [
              {
                  "locale": "en",
                  "content": "Freetext Filter"
              }
          ]
      },
      {
          "key": "tour.reports.freetext-filter.description",
          "default": "To add additional search terms type them here and click the search button.",
          "translations": [
              {
                  "locale": "en",
                  "content": "To add additional search terms type them here and click the search button."
              }
          ]
      },
      {
          "key": "tour.reports.list.title",
          "default": "Incoming Reports",
          "translations": [
              {
                  "locale": "en",
                  "content": "Incoming Reports"
              }
          ]
      },
      {
          "key": "tour.reports.list.description",
          "default": "This is a list of all your report messages from health workers with the most recent first.",
          "translations": [
              {
                  "locale": "en",
                  "content": "This is a list of all your report messages from health workers with the most recent first."
              }
          ]
      },
      {
          "key": "tour.reports.status.title",
          "default": "Report Status",
          "translations": [
              {
                  "locale": "en",
                  "content": "Report Status"
              }
          ]
      },
      {
          "key": "tour.reports.status.description",
          "default": "This icon shows the status of the report. A green circle means the report is valid, and red means invalid. A tick in the circle means someone has verified this report.",
          "translations": [
              {
                  "locale": "en",
                  "content": "This icon shows the status of the report. A green circle means the report is valid, and red means invalid. A tick in the circle means someone has verified this report."
              }
          ]
      },
      {
          "key": "tour.reports.details.title",
          "default": "Report Details",
          "translations": [
              {
                  "locale": "en",
                  "content": "Report Details"
              }
          ]
      },
      {
          "key": "tour.reports.details.description",
          "default": "You can see the details of the selected report in this pane.",
          "translations": [
              {
                  "locale": "en",
                  "content": "You can see the details of the selected report in this pane."
              }
          ]
      },
      {
          "key": "tour.reports.information.title",
          "default": "Report Information",
          "translations": [
              {
                  "locale": "en",
                  "content": "Report Information"
              }
          ]
      },
      {
          "key": "tour.reports.information.description",
          "default": "On the left hand side is the reporter's details. On the right hand side is the reported date.",
          "translations": [
              {
                  "locale": "en",
                  "content": "On the left hand side is the reporter's details. On the right hand side is the reported date."
              }
          ]
      },
      {
          "key": "tour.reports.content.title",
          "default": "Report Content",
          "translations": [
              {
                  "locale": "en",
                  "content": "Report Content"
              }
          ]
      },
      {
          "key": "tour.reports.content.description",
          "default": "The content of the report including the form type, submitted fields, generated fields, and any generated messages.",
          "translations": [
              {
                  "locale": "en",
                  "content": "The content of the report including the form type, submitted fields, generated fields, and any generated messages."
              }
          ]
      },
      {
          "key": "tour.reports.actions.title",
          "default": "Actions",
          "translations": [
              {
                  "locale": "en",
                  "content": "Actions"
              }
          ]
      },
      {
          "key": "tour.reports.actions.description",
          "default": "Actions you can perform on this report.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Actions you can perform on this report."
              }
          ]
      },
      {
          "key": "tour.analytics.overview.title",
          "default": "Data Visualization Analytics",
          "translations": [
              {
                  "locale": "en",
                  "content": "Data Visualization Analytics"
              }
          ]
      },
      {
          "key": "tour.analytics.overview.description",
          "default": "Medic Mobile organizes the data from your reports into charts and graphs to help you track pregnancies, monitor danger signs, and identify trends in your community - so you can make well-informed decisions and take action when it is needed.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Medic Mobile organizes the data from your reports into charts and graphs to help you track pregnancies, monitor danger signs, and identify trends in your community - so you can make well-informed decisions and take action when it is needed."
              }
          ]
      },
      {
          "key": "Institutional Delivery",
          "default": "Institutional Delivery",
          "translations": [
              {
                  "locale": "en",
                  "content": "Institutional Delivery"
              }
          ]
      },
      {
          "key": "At home with SBA",
          "default": "At home with SBA",
          "translations": [
              {
                  "locale": "en",
                  "content": "At home with SBA"
              }
          ]
      },
      {
          "key": "At home without SBA",
          "default": "At home without SBA",
          "translations": [
              {
                  "locale": "en",
                  "content": "At home without SBA"
              }
          ]
      },
      {
          "key": "Number of visits",
          "default": "{{number}}+ visits",
          "translations": [
              {
                  "locale": "en",
                  "content": "{{number}}+ visits"
              }
          ]
      },
      {
          "key": "Error sending message",
          "default": "Error sending message",
          "translations": [
              {
                  "locale": "en",
                  "content": "Error sending message"
              }
          ]
      },
      {
          "key": "Error updating user",
          "default": "Error updating user",
          "translations": [
              {
                  "locale": "en",
                  "content": "Error updating user"
              }
          ]
      },
      {
          "key": "Error deleting document",
          "default": "Error deleting document",
          "translations": [
              {
                  "locale": "en",
                  "content": "Error deleting document"
              }
          ]
      },
      {
          "key": "Error updating facility",
          "default": "Error updating facility",
          "translations": [
              {
                  "locale": "en",
                  "content": "Error updating facility"
              }
          ]
      },
      {
          "key": "Please select a facility",
          "default": "Please select a facility",
          "translations": [
              {
                  "locale": "en",
                  "content": "Please select a facility"
              }
          ]
      },
      {
          "key": "Error saving feedback",
          "default": "Error saving feedback",
          "translations": [
              {
                  "locale": "en",
                  "content": "Error saving feedback"
              }
          ]
      },
      {
          "key": "Error updating group",
          "default": "Error updating group",
          "translations": [
              {
                  "locale": "en",
                  "content": "Error updating group"
              }
          ]
      },
      {
          "key": "Antenatal Care",
          "default": "Antenatal Care",
          "translations": [
              {
                  "locale": "en",
                  "content": "Antenatal Care"
              }
          ]
      },
      {
          "key": "Stock Monitoring",
          "default": "Stock Monitoring",
          "translations": [
              {
                  "locale": "en",
                  "content": "Stock Monitoring"
              }
          ]
      },
      {
          "key": "Number in month",
          "default": "{{count}} in {{month}}",
          "translations": [
              {
                  "locale": "en",
                  "content": "{{count}} in {{month}}"
              }
          ]
      },
      {
          "key": "Schedules",
          "default": "Schedules",
          "translations": [
              {
                  "locale": "en",
                  "content": "Schedules"
              }
          ]
      },
      {
          "key": "Users",
          "default": "Users",
          "translations": [
              {
                  "locale": "en",
                  "content": "Users"
              }
          ]
      },
      {
          "key": "Settings",
          "default": "Settings",
          "translations": [
              {
                  "locale": "en",
                  "content": "Settings"
              }
          ]
      },
      {
          "key": "Translations",
          "default": "Translations",
          "translations": [
              {
                  "locale": "en",
                  "content": "Translations"
              }
          ]
      },
      {
          "key": "Forms",
          "default": "Forms",
          "translations": [
              {
                  "locale": "en",
                  "content": "Forms"
              }
          ]
      },
      {
          "key": "Advanced",
          "default": "Advanced",
          "translations": [
              {
                  "locale": "en",
                  "content": "Advanced"
              }
          ]
      },
      {
          "key": "Basic Settings",
          "default": "Basic Settings",
          "translations": [
              {
                  "locale": "en",
                  "content": "Basic Settings"
              }
          ]
      },
      {
          "key": "Advanced Settings",
          "default": "Advanced Settings",
          "translations": [
              {
                  "locale": "en",
                  "content": "Advanced Settings"
              }
          ]
      },
      {
          "key": "External ID",
          "default": "External ID",
          "translations": [
              {
                  "locale": "en",
                  "content": "External ID"
              }
          ]
      },
      {
          "key": "Districts",
          "default": "Districts",
          "translations": [
              {
                  "locale": "en",
                  "content": "Districts"
              }
          ]
      },
      {
          "key": "Accept plain-text messages",
          "default": "Accept plain-text messages",
          "translations": [
              {
                  "locale": "en",
                  "content": "Accept plain-text messages"
              }
          ]
      },
      {
          "key": "Accept plain-text messages help",
          "default": "Check this box if you want to accept regular SMS messages in addition to reports. If unchecked, an error message will be sent to anyone who submits anything other than a report.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Check this box if you want to accept regular SMS messages in addition to reports. If unchecked, an error message will be sent to anyone who submits anything other than a report."
              }
          ]
      },
      {
          "key": "Date display format",
          "default": "Date display format",
          "translations": [
              {
                  "locale": "en",
                  "content": "Date display format"
              }
          ]
      },
      {
          "key": "Datetime display format",
          "default": "Datetime display format",
          "translations": [
              {
                  "locale": "en",
                  "content": "Datetime display format"
              }
          ]
      },
      {
          "key": "For example",
          "default": "Eg:",
          "translations": [
              {
                  "locale": "en",
                  "content": "Eg:"
              }
          ]
      },
      {
          "key": "Phone number conversion",
          "default": "Phone number conversion",
          "translations": [
              {
                  "locale": "en",
                  "content": "Phone number conversion"
              }
          ]
      },
      {
          "key": "Replace country code with",
          "default": "Replace the country code for {{country}} with {{code}}",
          "translations": [
              {
                  "locale": "en",
                  "content": "Replace the country code for {{country}} with {{code}}"
              }
          ]
      },
      {
          "key": "Replace country code for",
          "default": "Replace country code for",
          "translations": [
              {
                  "locale": "en",
                  "content": "Replace country code for"
              }
          ]
      },
      {
          "key": "Messaging window",
          "default": "Messaging window",
          "translations": [
              {
                  "locale": "en",
                  "content": "Messaging window"
              }
          ]
      },
      {
          "key": "Send scheduled messages between",
          "default": "Send scheduled messages between",
          "translations": [
              {
                  "locale": "en",
                  "content": "Send scheduled messages between"
              }
          ]
      },
      {
          "key": "and",
          "default": "and",
          "translations": [
              {
                  "locale": "en",
                  "content": "and"
              }
          ]
      },
      {
          "key": "Upload Forms",
          "default": "Upload Forms",
          "translations": [
              {
                  "locale": "en",
                  "content": "Upload Forms"
              }
          ]
      },
      {
          "key": "Upload failed",
          "default": "Upload failed",
          "translations": [
              {
                  "locale": "en",
                  "content": "Upload failed"
              }
          ]
      },
      {
          "key": "Upload succeeded",
          "default": "Upload succeeded",
          "translations": [
              {
                  "locale": "en",
                  "content": "Upload succeeded"
              }
          ]
      },
      {
          "key": "Installed Forms",
          "default": "Installed Forms",
          "translations": [
              {
                  "locale": "en",
                  "content": "Installed Forms"
              }
          ]
      },
      {
          "key": "Choose file",
          "default": "Choose file",
          "translations": [
              {
                  "locale": "en",
                  "content": "Choose file"
              }
          ]
      },
      {
          "key": "Upload forms help",
          "default": "The file should contain a JSON encoded list of form definitions. Any existing forms will be overwritten.",
          "translations": [
              {
                  "locale": "en",
                  "content": "The file should contain a JSON encoded list of form definitions. Any existing forms will be overwritten."
              }
          ]
      },
      {
          "key": "Advanced settings intro",
          "default": "To check for and install newer versions of Medic Mobile or to adjust technical settings use the",
          "translations": [
              {
                  "locale": "en",
                  "content": "To check for and install newer versions of Medic Mobile or to adjust technical settings use the"
              }
          ]
      },
      {
          "key": "Advanced settings outro",
          "default": "This is intended for users with a highly technical background.",
          "translations": [
              {
                  "locale": "en",
                  "content": "This is intended for users with a highly technical background."
              }
          ]
      },
      {
          "key": "Dashboard settings page",
          "default": "Dashboard settings page",
          "translations": [
              {
                  "locale": "en",
                  "content": "Dashboard settings page"
              }
          ]
      },
      {
          "key": "Download",
          "default": "Download",
          "translations": [
              {
                  "locale": "en",
                  "content": "Download"
              }
          ]
      },
      {
          "key": "No schedules found",
          "default": "No schedules found",
          "translations": [
              {
                  "locale": "en",
                  "content": "No schedules found"
              }
          ]
      },
      {
          "key": "Overview",
          "default": "Overview",
          "translations": [
              {
                  "locale": "en",
                  "content": "Overview"
              }
          ]
      },
      {
          "key": "Incoming Reports",
          "default": "Incoming Reports",
          "translations": [
              {
                  "locale": "en",
                  "content": "Incoming Reports"
              }
          ]
      },
      {
          "key": "Unsaved changes",
          "default": "Unsaved changes",
          "translations": [
              {
                  "locale": "en",
                  "content": "Unsaved changes"
              }
          ]
      },
      {
          "key": "Discard changes to current language",
          "default": "Would you like to continue and discard changes made to the current language?",
          "translations": [
              {
                  "locale": "en",
                  "content": "Would you like to continue and discard changes made to the current language?"
              }
          ]
      },
      {
          "key": "Continue",
          "default": "Continue",
          "translations": [
              {
                  "locale": "en",
                  "content": "Continue"
              }
          ]
      },
      {
          "key": "Registrations",
          "default": "Registrations",
          "translations": [
              {
                  "locale": "en",
                  "content": "Registrations"
              }
          ]
      },
      {
          "key": "Registration format",
          "default": "Register for this message workflow by sending an SMS with the following format:",
          "translations": [
              {
                  "locale": "en",
                  "content": "Register for this message workflow by sending an SMS with the following format:"
              }
          ]
      },
      {
          "key": "Registration example",
          "default": "For example, to register \"{{name}}\" you would send:",
          "translations": [
              {
                  "locale": "en",
                  "content": "For example, to register \"{{name}}\" you would send:"
              }
          ]
      },
      {
          "key": "Validation message",
          "default": "If all the validations pass, this message will be sent to the sender:",
          "translations": [
              {
                  "locale": "en",
                  "content": "If all the validations pass, this message will be sent to the sender:"
              }
          ]
      },
      {
          "key": "No registrations found",
          "default": "No registrations found for this schedule. This indicates a problem with the configuration.",
          "translations": [
              {
                  "locale": "en",
                  "content": "No registrations found for this schedule. This indicates a problem with the configuration."
              }
          ]
      },
      {
          "key": "No forms found",
          "default": "No forms found for this schedule.",
          "translations": [
              {
                  "locale": "en",
                  "content": "No forms found for this schedule."
              }
          ]
      },
      {
          "key": "Report format",
          "default": "Recorded by sending an SMS in the format:",
          "translations": [
              {
                  "locale": "en",
                  "content": "Recorded by sending an SMS in the format:"
              }
          ]
      },
      {
          "key": "Language to edit",
          "default": "Language to edit",
          "translations": [
              {
                  "locale": "en",
                  "content": "Language to edit"
              }
          ]
      },
      {
          "key": "Schedule",
          "default": "Schedule",
          "translations": [
              {
                  "locale": "en",
                  "content": "Schedule"
              }
          ]
      },
      {
          "key": "Start messages based on",
          "default": "Start messages based on",
          "translations": [
              {
                  "locale": "en",
                  "content": "Start messages based on"
              }
          ]
      },
      {
          "key": "Exactly",
          "default": "Exactly",
          "translations": [
              {
                  "locale": "en",
                  "content": "Exactly"
              }
          ]
      },
      {
          "key": "On the day",
          "default": "On the {{day}}",
          "translations": [
              {
                  "locale": "en",
                  "content": "On the {{day}}"
              }
          ]
      },
      {
          "key": "minutes",
          "default": "minutes",
          "translations": [
              {
                  "locale": "en",
                  "content": "minutes"
              }
          ]
      },
      {
          "key": "hours",
          "default": "hours",
          "translations": [
              {
                  "locale": "en",
                  "content": "hours"
              }
          ]
      },
      {
          "key": "days",
          "default": "days",
          "translations": [
              {
                  "locale": "en",
                  "content": "days"
              }
          ]
      },
      {
          "key": "weeks",
          "default": "weeks",
          "translations": [
              {
                  "locale": "en",
                  "content": "weeks"
              }
          ]
      },
      {
          "key": "months",
          "default": "months",
          "translations": [
              {
                  "locale": "en",
                  "content": "months"
              }
          ]
      },
      {
          "key": "years",
          "default": "years",
          "translations": [
              {
                  "locale": "en",
                  "content": "years"
              }
          ]
      },
      {
          "key": "after the",
          "default": "after the",
          "translations": [
              {
                  "locale": "en",
                  "content": "after the"
              }
          ]
      },
      {
          "key": "send the following message to the",
          "default": "send the following message to the",
          "translations": [
              {
                  "locale": "en",
                  "content": "send the following message to the"
              }
          ]
      },
      {
          "key": "registration date",
          "default": "registration date",
          "translations": [
              {
                  "locale": "en",
                  "content": "registration date"
              }
          ]
      },
      {
          "key": "LMP date",
          "default": "LMP date",
          "translations": [
              {
                  "locale": "en",
                  "content": "LMP date"
              }
          ]
      },
      {
          "key": "registrant",
          "default": "registrant",
          "translations": [
              {
                  "locale": "en",
                  "content": "registrant"
              }
          ]
      },
      {
          "key": "registrants supervisor",
          "default": "registrant's supervisor",
          "translations": [
              {
                  "locale": "en",
                  "content": "registrant's supervisor"
              }
          ]
      },
      {
          "key": "This message is part of group",
          "default": "This message is part of group",
          "translations": [
              {
                  "locale": "en",
                  "content": "This message is part of group"
              }
          ]
      },
      {
          "key": "and should be sent at",
          "default": "and should be sent at",
          "translations": [
              {
                  "locale": "en",
                  "content": "and should be sent at"
              }
          ]
      },
      {
          "key": "Validations",
          "default": "Validations",
          "translations": [
              {
                  "locale": "en",
                  "content": "Validations"
              }
          ]
      },
      {
          "key": "Add Validation",
          "default": "Add Validation",
          "translations": [
              {
                  "locale": "en",
                  "content": "Add Validation"
              }
          ]
      },
      {
          "key": "patient id not found response",
          "default": "Send the following response message if the validations pass but the patient ID is not located.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Send the following response message if the validations pass but the patient ID is not located."
              }
          ]
      },
      {
          "key": "failed validation response message",
          "default": "Send the following response message if the",
          "translations": [
              {
                  "locale": "en",
                  "content": "Send the following response message if the"
              }
          ]
      },
      {
          "key": "field does not pass this validation",
          "default": "field does not pass this validation",
          "translations": [
              {
                  "locale": "en",
                  "content": "field does not pass this validation"
              }
          ]
      },
      {
          "key": "Audit Logs",
          "default": "Audit Logs",
          "translations": [
              {
                  "locale": "en",
                  "content": "Audit Logs"
              }
          ]
      },
      {
          "key": "User Feedback",
          "default": "User Feedback",
          "translations": [
              {
                  "locale": "en",
                  "content": "User Feedback"
              }
          ]
      },
      {
          "key": "Showing number of total",
          "default": "Showing {{number}} of {{total}}.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Showing {{number}} of {{total}}."
              }
          ]
      },
      {
          "key": "number records",
          "default": "{{number}} records",
          "translations": [
              {
                  "locale": "en",
                  "content": "{{number}} records"
              }
          ]
      },
      {
          "key": "No district",
          "default": "No district",
          "translations": [
              {
                  "locale": "en",
                  "content": "No district"
              }
          ]
      },
      {
          "key": "Backup",
          "default": "Backup",
          "translations": [
              {
                  "locale": "en",
                  "content": "Backup"
              }
          ]
      },
      {
          "key": "Restore",
          "default": "Restore",
          "translations": [
              {
                  "locale": "en",
                  "content": "Restore"
              }
          ]
      },
      {
          "key": "Overwrite Existing Records",
          "default": "Overwrite Existing Records",
          "translations": [
              {
                  "locale": "en",
                  "content": "Overwrite Existing Records"
              }
          ]
      },
      {
          "key": "Choose File",
          "default": "Choose File",
          "translations": [
              {
                  "locale": "en",
                  "content": "Choose File"
              }
          ]
      },
      {
          "key": "jquery.spreadsheet.addrow",
          "default": "Add row",
          "translations": [
              {
                  "locale": "en",
                  "content": "Add row"
              }
          ]
      },
      {
          "key": "jquery.spreadsheet.help.doubleclick",
          "default": "Double click: or enter key to edit a cell.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Double click: or enter key to edit a cell."
              }
          ]
      },
      {
          "key": "jquery.spreadsheet.help.enter",
          "default": "Enter: key to save.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Enter: key to save."
              }
          ]
      },
      {
          "key": "jquery.spreadsheet.help.escape",
          "default": "Escape: key for undo.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Escape: key for undo."
              }
          ]
      },
      {
          "key": "jquery.spreadsheet.help.tab",
          "default": "Tab: cycles through cells.",
          "translations": [
              {
                  "locale": "en",
                  "content": "Tab: cycles through cells."
              }
          ]
      },
      {
          "key": "jquery.spreadsheet.rows",
          "default": "rows",
          "translations": [
              {
                  "locale": "en",
                  "content": "rows"
              }
          ]
      }
   ],
   "forms": {
        "YYYY": {
            meta: {code: "YYYY", label: 'Test Monthly Report'},
            fields: {
                facility_id: {
                    labels: {
                        short: 'Health Facility Identifier',
                        tiny: 'HFI'
                    },
                    type: 'string',
                    required: true
                },
                 year: {
                     labels: {
                         short: 'Report Year',
                         tiny: 'RPY'
                     },
                     type: 'integer',
                     validate: {is_numeric_year: true},
                     required: true
                 },
                 month: {
                     labels: {
                         short: 'Report Month',
                         tiny: 'RPM'
                     },
                     type: 'integer',
                     validations: {is_numeric_month: true},
                     list: [
                        [ 1, { "en": "January" } ],
                        [ 2, { "en": "February" } ],
                        [ 3, { "en": "March" } ],
                        [ 4, { "en": "April" } ],
                        [ 5, { "en": "May" } ],
                        [ 6, { "en": "June" } ],
                        [ 7, { "en": "July" } ],
                        [ 8, { "en": "August" } ],
                        [ 9, { "en": "September" } ],
                        [ 10, { "en": "October" } ],
                        [ 11, { "en": "November" } ],
                        [ 12, { "en": "December" } ]
                     ],
                     required: true
                 },
                 misoprostol_administered: {
                    type: 'boolean',
                    labels: {
                       short: {
                          en: 'Misoprostol?'
                       },
                       tiny: {
                          en: 'MSP'
                       },
                       description: {
                          en: 'Was misoprostol administered?'
                       }
                    }
                 },
                 'quantity_dispensed.la_6x1': {
                     labels: {
                         short: 'LA 6x1: Dispensed total',
                         tiny: 'L1T'
                     },
                     type: 'integer'
                 },
                 'quantity_dispensed.la_6x2': {
                     labels: {
                         short: 'LA 6x2: Dispensed total',
                         tiny: 'L2T'
                     },
                     type: 'integer'
                 },
                 'quantity_dispensed.cotrimoxazole': {
                     labels: {
                         short: 'Cotrimoxazole: Dispensed total',
                         tiny: 'CDT'
                     },
                     type: 'integer'
                 },
                 'quantity_dispensed.zinc': {
                     labels: {
                         short: 'Zinc: Dispensed total',
                         tiny: 'ZDT'
                     },
                     type: 'integer'
                 },
                 'quantity_dispensed.ors': {
                     labels: {
                         short: 'ORS: Dispensed total',
                         tiny: 'ODT'
                     },
                     type: 'integer'
                 },
                 'quantity_dispensed.eye_ointment': {
                     labels: {
                         short: 'Eye Ointment: Dispensed total',
                         tiny: 'EOT'
                     },
                     type: 'integer'
                 },
                 'days_stocked_out.la_6x1': {
                     labels: {
                         short: 'LA 6x1: Days stocked out',
                         tiny: 'L1O'
                     },
                     type: 'integer'
                 },
                 'days_stocked_out.la_6x2': {
                     labels: {
                         short: 'LA 6x2: Days stocked out',
                         tiny: 'L2O'
                     },
                     type: 'integer'},
                 'days_stocked_out.cotrimoxazole': {
                     labels: {
                         short: 'Cotrimoxazole: Days stocked out',
                         tiny: 'CDO'
                     },
                     type: 'integer'},
                 'days_stocked_out.zinc': {
                     labels: {
                         short: 'Zinc: Days stocked out',
                         tiny: 'ZDO'
                     },
                     type: 'integer'},
                 'days_stocked_out.ors': {
                     labels: {
                         short: 'ORS: Days stocked out',
                         tiny: 'ODO'
                     },
                     type: 'integer'},
                 'days_stocked_out.eye_ointment': {
                     labels: {
                         short: 'Eye Ointment: Days stocked out',
                         tiny: 'EDO'
                     },
                     type: 'integer'}
            },
            autoreply: "Zikomo!",
            facility_reference: "facility_id",
            /*
             * messages_task is a function returns array of message objects,
             * e.g: [{to: '+123', message: 'foo'},...]
             * context includes: phone, clinic, keys, labels, values
             * Health Center -> Hospital
             */
            messages_task: "function() {var msg = [], ignore = [], dh_ph = clinic && clinic.parent && clinic.parent.parent && clinic.parent.parent.contact && clinic.parent.parent.contact.phone; keys.forEach(function(key) { if (ignore.indexOf(key) === -1) { msg.push(labels.shift() + ': ' + values.shift()); } else { labels.shift(); values.shift(); } }); return {to:dh_ph, message:msg.join(', ')}; }"
        },
        "YYYZ": {
            meta: {code: "YYYZ", label: 'Test Form - Required fields'},
            fields: {
                one: {
                    labels: {
                        short: 'One',
                        tiny: 'one'
                    },
                    type: 'string',
                    required: true
                },
                two: {
                    labels: {
                        short: 'Two',
                        tiny: 'two'
                    },
                    type: 'string',
                    required: true
                },
                birthdate: {
                     labels: {
                         short: 'Birth Date',
                         tiny: 'BIR'
                     },
                     type: 'date'
                }
            }
        },
        "YYYX": {
            meta: {code: "YYYX", label: 'Test Form - Required Facility'},
            fields: {
                id: {
                    labels: {
                        short: 'ID'
                    },
                    type: 'string',
                    required: true
                },
                foo: {
                    labels: {
                        short: 'Foo'
                    },
                    type: 'string',
                    required: true
                }
            },
            facility_reference: "id",
            facility_required: true
        },
        "YYYW": {
            meta: {
                code: "YYYW",
                label: 'Test Form - Public Form'
            },
            fields: {
                id: {
                    labels: {
                        short: 'ID'
                    },
                    type: 'string',
                    required: true
                },
                foo: {
                    labels: {
                        short: 'Foo'
                    },
                    type: 'string',
                    required: true
                }
            },
            public_form: true
        },
        "YYYV": {
            meta: {
                code: "YYYV",
                label: 'Test Labels'
            },
            fields: {
                id: {
                    labels: {
                        short: {
                            'fr': 'Identifier'
                        }
                    },
                    type: 'string',
                    required: true
                },
                foo: {
                    labels: {
                        short: {
                            'fr': 'Foo Bar'
                        }
                    },
                    type: 'string',
                    required: true
                }
            }
        },
        "YYYU": {
              "meta": {
                 "code": "YYYU",
                 "label": {
                    "fr": "Contre-référence"
                 }
              },
              "fields": {
                 "cref_year": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Année"
                       }
                    },
                    "position": 0,
                    "type": "integer",
                    "length": [
                       4,
                       4
                    ],
                    "validations": {
                       "is_numeric_year": true
                    },
                    "flags": {}
                 },
                 "cref_month": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Mois"
                       }
                    },
                    "position": 1,
                    "type": "integer",
                    "length": [
                       1,
                       2
                    ],
                    "validations": {
                       "is_numeric_month": true
                    },
                    "flags": {},
                    "list": [
                       [
                          1,
                          {
                             "fr": "Janvier"
                          }
                       ],
                       [
                          2,
                          {
                             "fr": "Février"
                          }
                       ],
                       [
                          3,
                          {
                             "fr": "Mars"
                          }
                       ],
                       [
                          4,
                          {
                             "fr": "Avril"
                          }
                       ],
                       [
                          5,
                          {
                             "fr": "Mai"
                          }
                       ],
                       [
                          6,
                          {
                             "fr": "Juin"
                          }
                       ],
                       [
                          7,
                          {
                             "fr": "Juillet"
                          }
                       ],
                       [
                          8,
                          {
                             "fr": "Aout"
                          }
                       ],
                       [
                          9,
                          {
                             "fr": "Septembre"
                          }
                       ],
                       [
                          10,
                          {
                             "fr": "Octobre"
                          }
                       ],
                       [
                          11,
                          {
                             "fr": "Novembre"
                          }
                       ],
                       [
                          12,
                          {
                             "fr": "Décembre"
                          }
                       ]
                    ]
                 },
                 "cref_day": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Jour"
                       }
                    },
                    "position": 2,
                    "type": "integer",
                    "length": [
                       1,
                       2
                    ],
                    "validations": {
                       "is_numeric_day": true
                    },
                    "flags": {}
                 },
                 "cref_rc": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Code du RC"
                       }
                    },
                    "position": 3,
                    "type": "string",
                    "length": [
                       11,
                       11
                    ],
                    "validations": {},
                    "flags": {
                       "input_digits_only": true
                    }
                 },
                 "cref_ptype": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Type de patient"
                       }
                    },
                    "position": 4,
                    "type": "integer",
                    "length": [
                       1,
                       2
                    ],
                    "validations": {},
                    "flags": {},
                    "list": [
                       [
                          1,
                          {
                             "fr": "Femme enceinte"
                          }
                       ],
                       [
                          2,
                          {
                             "fr": "Accouchée malade"
                          }
                       ],
                       [
                          3,
                          {
                             "fr": "Enfant"
                          }
                       ],
                       [
                          4,
                          {
                             "fr": "Nouveau né"
                          }
                       ],
                       [
                          5,
                          {
                             "fr": "Autre"
                          }
                       ]
                    ]
                 },
                 "cref_name": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Nom"
                       }
                    },
                    "position": 5,
                    "type": "string",
                    "length": [
                       0,
                       20
                    ],
                    "validations": {},
                    "flags": {}
                 },
                 "cref_age": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Age"
                       }
                    },
                    "position": 6,
                    "type": "integer",
                    "length": [
                       1,
                       2
                    ],
                    "validations": {},
                    "flags": {}
                 },
                 "cref_mom": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Nom de la mère ou de l'accompagnant"
                       }
                    },
                    "position": 7,
                    "type": "string",
                    "length": [
                       0,
                       20
                    ],
                    "validations": {},
                    "flags": {}
                 },
                 "cref_treated": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Patient traité pour"
                       }
                    },
                    "position": 8,
                    "type": "string",
                    "length": [
                       0,
                       20
                    ],
                    "validations": {},
                    "flags": {}
                 },
                 "cref_rec": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Recommandations/Conseils"
                       }
                    },
                    "position": 9,
                    "type": "integer",
                    "length": [
                       1,
                       2
                    ],
                    "validations": {},
                    "flags": {},
                    "list": [
                       [
                          1,
                          {
                             "fr": "Accusé réception"
                          }
                       ],
                       [
                          2,
                          {
                             "fr": "Non recu, rechercher le malade"
                          }
                       ],
                       [
                          3,
                          {
                             "fr": "Revenir au CS"
                          }
                       ],
                       [
                          4,
                          {
                             "fr": "Suivi à domicile"
                          }
                       ],
                       [
                          5,
                          {
                             "fr": "Guéri"
                          }
                       ],
                       [
                          6,
                          {
                             "fr": "Décédé"
                          }
                       ],
                       [
                          7,
                          {
                             "fr": "Référé"
                          }
                       ],
                       [
                          8,
                          {
                             "fr": "Evadé"
                          }
                       ],
                       [
                          9,
                          {
                             "fr": "Refus d'admission"
                          }
                       ],
                       [
                          10,
                          {
                             "fr": "Conseils hygiéno-diététiques"
                          }
                       ],
                       [
                          11,
                          {
                             "fr": "Autres"
                          }
                       ]
                    ]
                 },
                 "cref_reason": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Précisions pour recommandations"
                       }
                    },
                    "position": 10,
                    "type": "string",
                    "length": [
                       0,
                       35
                    ],
                    "validations": {},
                    "flags": {}
                 },
                 "cref_agent": {
                    "labels": {
                       "long": null,
                       "description": null,
                       "short": {
                          "fr": "Nom de l'agent de santé"
                       }
                    },
                    "position": 11,
                    "type": "string",
                    "length": [
                       0,
                       20
                    ],
                    "validations": {},
                    "flags": {}
                 }
              },
              "facility_reference": "cref_rc"
        }
   }
};
