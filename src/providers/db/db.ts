import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { SQLiteObject } from '@ionic-native/sqlite';
//import { SQLite } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DbProvider {

  //db: SQLiteObject = null;
  items: any;

  constructor() {
    this.items = [
      {
        "id": 1,
        "provincia": "AZUAY",
        "canton": "CUENCA",
        "parroquia": "CUENCA",
        "poblacion": "CUENCA",
        "z": 0.25
      },
      {
        "id": 2,
        "provincia": "AZUAY",
        "canton": "CHORDELEG",
        "parroquia": "CHORDELEG",
        "poblacion": "CHORDELEG",
        "z": 0.25
      },
      {
        "id": 3,
        "provincia": "AZUAY",
        "canton": "GUALACEO",
        "parroquia": "GUALACEO",
        "poblacion": "GUALACEO",
        "z": 0.25
      },
      {
        "id": 4,
        "provincia": "AZUAY",
        "canton": "SEVILLA DE ORO",
        "parroquia": "SEVILLA DE ORO",
        "poblacion": "SEVILLA DE ORO",
        "z": 0.25
      },
      {
        "id": 5,
        "provincia": "AZUAY",
        "canton": "EL PAN",
        "parroquia": "EL PAN",
        "poblacion": "EL PAN",
        "z": 0.25
      },
      {
        "id": 6,
        "provincia": "AZUAY",
        "canton": "PAUTE",
        "parroquia": "CHICAN (GUILLERMO ORTEGA)",
        "poblacion": "PAUTE",
        "z": 0.25
      },
      {
        "id": 7,
        "provincia": "BOLIVAR",
        "canton": "GUARANDA",
        "parroquia": "GUARANDA",
        "poblacion": "GUARANDA",
        "z": 0.35
      },
      {
        "id": 8,
        "provincia": "BOLIVAR",
        "canton": "GUARANDA",
        "parroquia": "SAN LORENZO",
        "poblacion": "SAN LORENZO",
        "z": 0.35
      },
      {
        "id": 9,
        "provincia": "BOLIVAR",
        "canton": "SAN MIGUEL",
        "parroquia": "SANTIAGO",
        "poblacion": "SANTIAGO",
        "z": 0.35
      },
      {
        "id": 10,
        "provincia": "BOLIVAR",
        "canton": "CHILLANES",
        "parroquia": "SAN JOSE DEL TAMBO",
        "poblacion": "SAN JOSE DEL TAMBO",
        "z": 0.35
      },
      {
        "id": 11,
        "provincia": "BOLIVAR",
        "canton": "GUARANDA",
        "parroquia": "SAN SIMON (YACOTO)",
        "poblacion": "SAN SIMON",
        "z": 0.35
      },
      {
        "id": 12,
        "provincia": "BOLIVAR",
        "canton": "SAN MIGUEL",
        "parroquia": "SAN MIGUEL",
        "poblacion": "SAN MIGUEL DE BOLIVAR",
        "z": 0.35
      },
      {
        "id": 13,
        "provincia": "BOLIVAR",
        "canton": "CHIMBO",
        "parroquia": "SAN JOSE DE CHIMBO",
        "poblacion": "SAN JOSE DE CHIMBO",
        "z": 0.35
      },
      {
        "id": 14,
        "provincia": "BOLIVAR",
        "canton": "GUARANDA",
        "parroquia": "SIMIATUG",
        "poblacion": "SIMIATUG",
        "z": 0.3
      },
      {
        "id": 15,
        "provincia": "BOLIVAR",
        "canton": "GUARANDA",
        "parroquia": "SAN LUIS DE PAMBIL",
        "poblacion": "SAN LUIS DE PAMBIL",
        "z": 0.3
      },
      {
        "id": 16,
        "provincia": "BOLIVAR",
        "canton": "GUARANDA",
        "parroquia": "FACUNDO VELA",
        "poblacion": "FACUNDO VELA",
        "z": 0.3
      },
      {
        "id": 17,
        "provincia": "BOLIVAR",
        "canton": "LAS NAVES",
        "parroquia": "LAS NAVES",
        "poblacion": "LAS MERCEDES",
        "z": 0.3
      },
      {
        "id": 18,
        "provincia": "BOLIVAR",
        "canton": "LAS NAVES",
        "parroquia": "LAS NAVES",
        "poblacion": "LAS NAVES",
        "z": 0.3
      },
      {
        "id": 19,
        "provincia": "BOLIVAR",
        "canton": "GUARANDA",
        "parroquia": "SAN LUIS DE PAMBIL",
        "poblacion": "SAN LUIS DE LAS MERCEDES",
        "z": 0.3
      },
      {
        "id": 20,
        "provincia": "BOLIVAR",
        "canton": "ECHEANDIA",
        "parroquia": "ECHEANDIA",
        "poblacion": "ECHEANDIA",
        "z": 0.3
      },
      {
        "id": 21,
        "provincia": "BOLIVAR",
        "canton": "CHILLANES",
        "parroquia": "CHILLANES",
        "poblacion": "CHILLANES",
        "z": 0.4
      },
      {
        "id": 22,
        "provincia": "CA�AR",
        "canton": "CA�AR",
        "parroquia": "CA�AR",
        "poblacion": "CA�AR",
        "z": 0.3
      },
      {
        "id": 23,
        "provincia": "CA�AR",
        "canton": "EL TAMBO",
        "parroquia": "EL TAMBO",
        "poblacion": "EL TAMBO",
        "z": 0.3
      },
      {
        "id": 24,
        "provincia": "CA�AR",
        "canton": "LA TRONCAL",
        "parroquia": "PANCHO NEGRO",
        "poblacion": "LA PUNTILLA",
        "z": 0.4
      },
      {
        "id": 25,
        "provincia": "CA�AR",
        "canton": "LA TRONCAL",
        "parroquia": "LA TRONCAL",
        "poblacion": "LA TRONCAL",
        "z": 0.4
      },
      {
        "id": 26,
        "provincia": "CA�AR",
        "canton": "DELEG",
        "parroquia": "DELEG",
        "poblacion": "DELEG",
        "z": 0.25
      },
      {
        "id": 27,
        "provincia": "CA�AR",
        "canton": "AZOGUES",
        "parroquia": "AZOGUES",
        "poblacion": "AZOGUES",
        "z": 0.25
      },
      {
        "id": 28,
        "provincia": "CA�AR",
        "canton": "BIBLIAN",
        "parroquia": "BIBLIAN",
        "poblacion": "BIBLIAN",
        "z": 0.25
      },
      {
        "id": 29,
        "provincia": "CARCHI",
        "canton": "SAN PEDRO DE HUACA",
        "parroquia": "HUACA",
        "poblacion": "HUACA",
        "z": 0.4
      },
      {
        "id": 30,
        "provincia": "CARCHI",
        "canton": "TULCAN",
        "parroquia": "EL CARMELO (EL PUN)",
        "poblacion": "EL PLAYON DE SAN FRANCISCO",
        "z": 0.4
      },
      {
        "id": 31,
        "provincia": "CARCHI",
        "canton": "SAN PEDRO DE HUACA",
        "parroquia": "MARISCAL SUCRE",
        "poblacion": "MARISCAL SUCRE",
        "z": 0.4
      },
      {
        "id": 32,
        "provincia": "CARCHI",
        "canton": "TULCAN",
        "parroquia": "TULCAN",
        "poblacion": "TULCAN",
        "z": 0.4
      },
      {
        "id": 33,
        "provincia": "CARCHI",
        "canton": "ESPEJO",
        "parroquia": "EL ANGEL",
        "poblacion": "EL ANGEL",
        "z": 0.4
      },
      {
        "id": 34,
        "provincia": "CARCHI",
        "canton": "MONTUFAR",
        "parroquia": "SAN GABRIEL",
        "poblacion": "SAN GABRIEL",
        "z": 0.4
      },
      {
        "id": 35,
        "provincia": "CARCHI",
        "canton": "TULCAN",
        "parroquia": "EL CARMELO (EL PUN)",
        "poblacion": "EL CARMELO",
        "z": 0.4
      },
      {
        "id": 36,
        "provincia": "CARCHI",
        "canton": "ESPEJO",
        "parroquia": "LA LIBERTAD (ALIZO)",
        "poblacion": "LA LIBERTAD",
        "z": 0.4
      },
      {
        "id": 37,
        "provincia": "CARCHI",
        "canton": "TULCAN",
        "parroquia": "JULIO ANDRADE (OREJUELA)",
        "poblacion": "JULIO ANDRADE",
        "z": 0.4
      },
      {
        "id": 38,
        "provincia": "CARCHI",
        "canton": "MONTUFAR",
        "parroquia": "LA PAZ",
        "poblacion": "LA PAZ",
        "z": 0.4
      },
      {
        "id": 39,
        "provincia": "CARCHI",
        "canton": "ESPEJO",
        "parroquia": "SAN ISIDRO",
        "poblacion": "SAN ISIDRO",
        "z": 0.4
      },
      {
        "id": 40,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "GARCIA MORENO",
        "poblacion": "SAN JOSE DE TINAJILLAS",
        "z": 0.4
      },
      {
        "id": 41,
        "provincia": "CARCHI",
        "canton": "TULCAN",
        "parroquia": "SANTA MARTHA DE CUBA",
        "poblacion": "SANTA MARTHA DE CUBA",
        "z": 0.4
      },
      {
        "id": 42,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "GARCIA MORENO",
        "poblacion": "GARCIA MORENO",
        "z": 0.4
      },
      {
        "id": 43,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "MONTE OLIVO",
        "poblacion": "MONTE OLIVO",
        "z": 0.4
      },
      {
        "id": 44,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "LOS ANDES",
        "poblacion": "PIQUIUCHO",
        "z": 0.4
      },
      {
        "id": 45,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "SAN RAFAEL",
        "poblacion": "PUEBLO NUEVO",
        "z": 0.4
      },
      {
        "id": 46,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "SAN VICENTE DE PUSIR",
        "poblacion": "PUSIR",
        "z": 0.4
      },
      {
        "id": 47,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "LOS ANDES",
        "poblacion": "LOS ANDES",
        "z": 0.4
      },
      {
        "id": 48,
        "provincia": "CARCHI",
        "canton": "MONTUFAR",
        "parroquia": "FERNANDEZ SALVADOR",
        "poblacion": "FERNANDEZ SALVADOR",
        "z": 0.4
      },
      {
        "id": 49,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "SAN VICENTE DE PUSIR",
        "poblacion": "SAN VICENTE DE PUSIR",
        "z": 0.4
      },
      {
        "id": 50,
        "provincia": "CARCHI",
        "canton": "MIRA",
        "parroquia": "MIRA (CHONTAHUASI)",
        "poblacion": "MIRA",
        "z": 0.4
      },
      {
        "id": 51,
        "provincia": "CARCHI",
        "canton": "BOLIVAR",
        "parroquia": "BOLIVAR",
        "poblacion": "BOLIVAR",
        "z": 0.4
      },
      {
        "id": 52,
        "provincia": "CARCHI",
        "canton": "TULCAN",
        "parroquia": "TUFI�O",
        "poblacion": "TUFI�O",
        "z": 0.4
      },
      {
        "id": 53,
        "provincia": "CHIMBORAZO",
        "canton": "COLTA",
        "parroquia": "CA�I",
        "poblacion": "CALP�",
        "z": 0.35
      },
      {
        "id": 54,
        "provincia": "CHIMBORAZO",
        "canton": "PALLATANGA",
        "parroquia": "PALLATANGA",
        "poblacion": "PALLATANGA",
        "z": 0.4
      },
      {
        "id": 55,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "GUANO",
        "poblacion": "PUNGAL GRANDE",
        "z": 0.4
      },
      {
        "id": 56,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "GUANO",
        "poblacion": "GUANO",
        "z": 0.4
      },
      {
        "id": 57,
        "provincia": "CHIMBORAZO",
        "canton": "PENIPE",
        "parroquia": "PENIPE",
        "poblacion": "PENIPE",
        "z": 0.4
      },
      {
        "id": 58,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "SAN ANDRES",
        "poblacion": "SAN ANDRES",
        "z": 0.4
      },
      {
        "id": 59,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "SAN ISIDRO DE PATULU",
        "poblacion": "SAN ISIDRO DE PATULU",
        "z": 0.4
      },
      {
        "id": 60,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "VALPARAISO",
        "poblacion": "VALPARAISO",
        "z": 0.4
      },
      {
        "id": 61,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "SAN JOSE DEL CHAZO",
        "poblacion": "SAN JOSE DE CHAZO",
        "z": 0.4
      },
      {
        "id": 62,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "GUANANDO",
        "poblacion": "GUANANDO",
        "z": 0.4
      },
      {
        "id": 63,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "CALPI",
        "poblacion": "CALPI",
        "z": 0.4
      },
      {
        "id": 64,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "RIOBAMBA",
        "poblacion": "LIC�N",
        "z": 0.4
      },
      {
        "id": 65,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "QUIMIAG",
        "poblacion": "QUIMIAG",
        "z": 0.4
      },
      {
        "id": 66,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "CALPI",
        "poblacion": "ASUNCION",
        "z": 0.4
      },
      {
        "id": 67,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "RIOBAMBA",
        "poblacion": "MACAJ�",
        "z": 0.4
      },
      {
        "id": 68,
        "provincia": "CHIMBORAZO",
        "canton": "PENIPE",
        "parroquia": "PUELA",
        "poblacion": "PUELA",
        "z": 0.4
      },
      {
        "id": 69,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "GUANO",
        "poblacion": "RIOBAMBA",
        "z": 0.4
      },
      {
        "id": 70,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "ILAPO",
        "poblacion": "ILAPO",
        "z": 0.4
      },
      {
        "id": 71,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "SAN GERARDO DE PACAICAGUAN",
        "poblacion": "SAN GERARDO",
        "z": 0.4
      },
      {
        "id": 72,
        "provincia": "CHIMBORAZO",
        "canton": "PENIPE",
        "parroquia": "SAN ANTONIO DE BAYUSHIG",
        "poblacion": "SAN ANTONIO DE BAYUSHIG",
        "z": 0.4
      },
      {
        "id": 73,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "SANTA FE DE GALAN",
        "poblacion": "SANTA FE DE GALAN",
        "z": 0.4
      },
      {
        "id": 74,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "RIOBAMBA",
        "poblacion": "SAN VICENTE",
        "z": 0.4
      },
      {
        "id": 75,
        "provincia": "CHIMBORAZO",
        "canton": "CHAMBO",
        "parroquia": "CHAMBO",
        "poblacion": "CHAMBO",
        "z": 0.4
      },
      {
        "id": 76,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "PUNIN",
        "poblacion": "PUNIN",
        "z": 0.4
      },
      {
        "id": 77,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "LICTO",
        "poblacion": "LICTO",
        "z": 0.4
      },
      {
        "id": 78,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "PUNGALA",
        "poblacion": "PUNGALA",
        "z": 0.4
      },
      {
        "id": 79,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "RIOBAMBA",
        "poblacion": "YARUQUIES",
        "z": 0.4
      },
      {
        "id": 80,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "SAN LUIS",
        "poblacion": "SAN LUIS",
        "z": 0.4
      },
      {
        "id": 81,
        "provincia": "CHIMBORAZO",
        "canton": "COLTA",
        "parroquia": "JUAN DE VELASCO (PANGOR)",
        "poblacion": "JUAN DE VELASCO",
        "z": 0.4
      },
      {
        "id": 82,
        "provincia": "CHIMBORAZO",
        "canton": "GUAMOTE",
        "parroquia": "CEBADAS",
        "poblacion": "CEBADAS",
        "z": 0.4
      },
      {
        "id": 83,
        "provincia": "CHIMBORAZO",
        "canton": "COLTA",
        "parroquia": "VILLA LA UNION (CAJABAMBA)",
        "poblacion": "CAJABAMBA",
        "z": 0.4
      },
      {
        "id": 84,
        "provincia": "CHIMBORAZO",
        "canton": "GUANO",
        "parroquia": "GUANO",
        "poblacion": "CUBIJIES",
        "z": 0.4
      },
      {
        "id": 85,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "SAN JUAN",
        "poblacion": "SAN JUAN",
        "z": 0.4
      },
      {
        "id": 86,
        "provincia": "CHIMBORAZO",
        "canton": "COLTA",
        "parroquia": "COLUMBE",
        "poblacion": "COLUMBE",
        "z": 0.4
      },
      {
        "id": 87,
        "provincia": "CHIMBORAZO",
        "canton": "PENIPE",
        "parroquia": "EL ALTAR",
        "poblacion": "MATUS",
        "z": 0.4
      },
      {
        "id": 88,
        "provincia": "CHIMBORAZO",
        "canton": "COLTA",
        "parroquia": "VILLA LA UNION (CAJABAMBA)",
        "poblacion": "VILLA LA UNION",
        "z": 0.4
      },
      {
        "id": 89,
        "provincia": "CHIMBORAZO",
        "canton": "GUAMOTE",
        "parroquia": "GUAMOTE",
        "poblacion": "GUAMOTE",
        "z": 0.4
      },
      {
        "id": 90,
        "provincia": "CHIMBORAZO",
        "canton": "RIOBAMBA",
        "parroquia": "PUNGALA",
        "poblacion": "LLACTAPAMBA DE ALAO",
        "z": 0.35
      },
      {
        "id": 91,
        "provincia": "CHIMBORAZO",
        "canton": "CHUNCHI",
        "parroquia": "CHUNCHI",
        "poblacion": "CHUNCHI",
        "z": 0.35
      },
      {
        "id": 92,
        "provincia": "CHIMBORAZO",
        "canton": "ALAUSI",
        "parroquia": "SIBAMBE",
        "poblacion": "ALAUSI",
        "z": 0.35
      },
      {
        "id": 93,
        "provincia": "COTOPAXI",
        "canton": "PUJILI",
        "parroquia": "ANGAMARCA",
        "poblacion": "ANGAMARCA",
        "z": 0.3
      },
      {
        "id": 94,
        "provincia": "COTOPAXI",
        "canton": "LA MANA",
        "parroquia": "LA MANA",
        "poblacion": "LA MANA",
        "z": 0.3
      },
      {
        "id": 95,
        "provincia": "COTOPAXI",
        "canton": "PUJILI",
        "parroquia": "ZUMBAHUA",
        "poblacion": "ZUMBAHUA",
        "z": 0.3
      },
      {
        "id": 96,
        "provincia": "COTOPAXI",
        "canton": "PANGUA",
        "parroquia": "EL CORAZON",
        "poblacion": "EL CORAZON",
        "z": 0.3
      },
      {
        "id": 97,
        "provincia": "COTOPAXI",
        "canton": "PANGUA",
        "parroquia": "MORASPUNGO",
        "poblacion": "MORASPUNGO",
        "z": 0.3
      },
      {
        "id": 98,
        "provincia": "COTOPAXI",
        "canton": "SIGCHOS",
        "parroquia": "SIGCHOS",
        "poblacion": "SIGCHOS",
        "z": 0.3
      },
      {
        "id": 99,
        "provincia": "COTOPAXI",
        "canton": "SALCEDO",
        "parroquia": "CUSUBAMBA",
        "poblacion": "CUSUBAMBA",
        "z": 0.4
      },
      {
        "id": 100,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "ALAQUES (ALAQUEZ)",
        "poblacion": "ALAQUES",
        "z": 0.4
      },
      {
        "id": 101,
        "provincia": "COTOPAXI",
        "canton": "SALCEDO",
        "parroquia": "MULALILLO",
        "poblacion": "MULALILLO",
        "z": 0.4
      },
      {
        "id": 102,
        "provincia": "COTOPAXI",
        "canton": "SALCEDO",
        "parroquia": "PANSALEO",
        "poblacion": "PANSALEO",
        "z": 0.4
      },
      {
        "id": 103,
        "provincia": "COTOPAXI",
        "canton": "SALCEDO",
        "parroquia": "ANTONIO JOSE HOLGUIN",
        "poblacion": "ANTONIO JOSE HOLGUIN",
        "z": 0.4
      },
      {
        "id": 104,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "GUAITACAMA (GUAYTACAMA)",
        "poblacion": "GUAITACAMA",
        "z": 0.4
      },
      {
        "id": 105,
        "provincia": "COTOPAXI",
        "canton": "SALCEDO",
        "parroquia": "MULLIQUINDIL (SANTA ANA)",
        "poblacion": "MULLIQUINDIL",
        "z": 0.4
      },
      {
        "id": 106,
        "provincia": "COTOPAXI",
        "canton": "SAQUISILI",
        "parroquia": "CHANTILIN",
        "poblacion": "SAQUISILI",
        "z": 0.4
      },
      {
        "id": 107,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "POALO",
        "poblacion": "MARISCAL SUCRE",
        "z": 0.4
      },
      {
        "id": 108,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "LATACUNGA",
        "poblacion": "LATACUNGA",
        "z": 0.4
      },
      {
        "id": 109,
        "provincia": "COTOPAXI",
        "canton": "PUJILI",
        "parroquia": "LA VICTORIA",
        "poblacion": "LA VICTORIA",
        "z": 0.4
      },
      {
        "id": 110,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "SAN JUAN DE PASTOCALLE",
        "poblacion": "SAN JUAN DE PASTOCALLE",
        "z": 0.4
      },
      {
        "id": 111,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "TANICUCHI",
        "poblacion": "TANICUCHA",
        "z": 0.4
      },
      {
        "id": 112,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "TOACASO",
        "poblacion": "TOACASO",
        "z": 0.4
      },
      {
        "id": 113,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "MULALO",
        "poblacion": "MULALO",
        "z": 0.4
      },
      {
        "id": 114,
        "provincia": "COTOPAXI",
        "canton": "LATACUNGA",
        "parroquia": "MULALO",
        "poblacion": "SAN AGUSTIN DE CALLO",
        "z": 0.4
      },
      {
        "id": 115,
        "provincia": "COTOPAXI",
        "canton": "SALCEDO",
        "parroquia": "SAN MIGUEL",
        "poblacion": "SAN MIGUEL DE SALCEDO",
        "z": 0.4
      },
      {
        "id": 116,
        "provincia": "COTOPAXI",
        "canton": "PUJILI",
        "parroquia": "PUJILI",
        "poblacion": "PUJILI",
        "z": 0.4
      },
      {
        "id": 117,
        "provincia": "EL ORO",
        "canton": "PORTOVELO",
        "parroquia": "PORTOVELO",
        "poblacion": "PORTOVELO",
        "z": 0.3
      },
      {
        "id": 118,
        "provincia": "EL ORO",
        "canton": "CHILLA",
        "parroquia": "CHILLA",
        "poblacion": "CHILLA",
        "z": 0.3
      },
      {
        "id": 119,
        "provincia": "EL ORO",
        "canton": "ATAHUALPA",
        "parroquia": "PACCHA",
        "poblacion": "PACCHA",
        "z": 0.3
      },
      {
        "id": 120,
        "provincia": "EL ORO",
        "canton": "PI�AS",
        "parroquia": "PI�AS",
        "poblacion": "PI�AS",
        "z": 0.3
      },
      {
        "id": 121,
        "provincia": "EL ORO",
        "canton": "ZARUMA",
        "parroquia": "MALVAS",
        "poblacion": "ZARUMA",
        "z": 0.3
      },
      {
        "id": 122,
        "provincia": "EL ORO",
        "canton": "HUAQUILLAS",
        "parroquia": "HUAQUILLAS",
        "poblacion": "HUAQUILLAS",
        "z": 0.4
      },
      {
        "id": 123,
        "provincia": "EL ORO",
        "canton": "SANTA ROSA",
        "parroquia": "SANTA ROSA",
        "poblacion": "SANTA ROSA",
        "z": 0.4
      },
      {
        "id": 124,
        "provincia": "EL ORO",
        "canton": "ARENILLAS",
        "parroquia": "ARENILLAS",
        "poblacion": "ARENILLAS",
        "z": 0.4
      },
      {
        "id": 125,
        "provincia": "EL ORO",
        "canton": "SANTA ROSA",
        "parroquia": "BELLAVISTA",
        "poblacion": "BELLAVISTA",
        "z": 0.4
      },
      {
        "id": 126,
        "provincia": "EL ORO",
        "canton": "MACHALA",
        "parroquia": "MACHALA",
        "poblacion": "MACHALA",
        "z": 0.4
      },
      {
        "id": 127,
        "provincia": "EL ORO",
        "canton": "BALSAS",
        "parroquia": "BALSAS",
        "poblacion": "BALSAS",
        "z": 0.35
      },
      {
        "id": 128,
        "provincia": "EL ORO",
        "canton": "MARCABELI",
        "parroquia": "MARCABELI",
        "poblacion": "MARCABELI",
        "z": 0.35
      },
      {
        "id": 129,
        "provincia": "EL ORO",
        "canton": "PASAJE",
        "parroquia": "PASAJE",
        "poblacion": "PASAJE",
        "z": 0.35
      },
      {
        "id": 130,
        "provincia": "EL ORO",
        "canton": "SANTA ROSA",
        "parroquia": "BELLAMARIA",
        "poblacion": "BELLA MARIA",
        "z": 0.4
      },
      {
        "id": 131,
        "provincia": "EL ORO",
        "canton": "EL GUABO",
        "parroquia": "EL GUABO",
        "poblacion": "EL GUABO",
        "z": 0.4
      },
      {
        "id": 132,
        "provincia": "ESMERALDAS",
        "canton": "QUININDE",
        "parroquia": "LA UNION",
        "poblacion": "LA UNION",
        "z": 0.5
      },
      {
        "id": 133,
        "provincia": "ESMERALDAS",
        "canton": "QUININDE",
        "parroquia": "VICHE",
        "poblacion": "VICHE",
        "z": 0.5
      },
      {
        "id": 134,
        "provincia": "ESMERALDAS",
        "canton": "QUININDE",
        "parroquia": "ROSA ZARATE (QUININDE)",
        "poblacion": "MONTERREY",
        "z": 0.5
      },
      {
        "id": 135,
        "provincia": "ESMERALDAS",
        "canton": "QUININDE",
        "parroquia": "ROSA ZARATE (QUININDE)",
        "poblacion": "LA VILLEGAS",
        "z": 0.5
      },
      {
        "id": 136,
        "provincia": "ESMERALDAS",
        "canton": "ATACAMES",
        "parroquia": "ATACAMES",
        "poblacion": "ATACAMES",
        "z": 0.5
      },
      {
        "id": 137,
        "provincia": "ESMERALDAS",
        "canton": "QUININDE",
        "parroquia": "ROSA ZARATE (QUININDE)",
        "poblacion": "ROSA ZARATE",
        "z": 0.5
      },
      {
        "id": 138,
        "provincia": "ESMERALDAS",
        "canton": "MUISNE",
        "parroquia": "BOLIVAR",
        "poblacion": "BOLIVAR",
        "z": 0.5
      },
      {
        "id": 139,
        "provincia": "ESMERALDAS",
        "canton": "QUININDE",
        "parroquia": "ROSA ZARATE (QUININDE)",
        "poblacion": "LA INDEPENDENCIA",
        "z": 0.5
      },
      {
        "id": 140,
        "provincia": "ESMERALDAS",
        "canton": "QUININDE",
        "parroquia": "MALIMPIA",
        "poblacion": "LA TE",
        "z": 0.5
      },
      {
        "id": 141,
        "provincia": "ESMERALDAS",
        "canton": "QUININDE",
        "parroquia": "MALIMPIA",
        "poblacion": "ZAPALLO",
        "z": 0.5
      },
      {
        "id": 142,
        "provincia": "ESMERALDAS",
        "canton": "ESMERALDAS",
        "parroquia": "ESMERALDAS",
        "poblacion": "ESMERALDAS",
        "z": 0.5
      },
      {
        "id": 143,
        "provincia": "ESMERALDAS",
        "canton": "SAN LORENZO",
        "parroquia": "SAN LORENZO",
        "poblacion": "SAN LORENZO",
        "z": 0.5
      },
      {
        "id": 144,
        "provincia": "ESMERALDAS",
        "canton": "ATACAMES",
        "parroquia": "TONSUPA",
        "poblacion": "PUERTO GAVIOTA",
        "z": 0.5
      },
      {
        "id": 145,
        "provincia": "ESMERALDAS",
        "canton": "LA CONCORDIA",
        "parroquia": "LA CONCORDIA",
        "poblacion": "LA CONCORDIA",
        "z": 0.5
      },
      {
        "id": 146,
        "provincia": "ESMERALDAS",
        "canton": "LA CONCORDIA",
        "parroquia": "LA CONCORDIA",
        "poblacion": "PLAN PILOTO",
        "z": 0.4
      },
      {
        "id": 147,
        "provincia": "ESMERALDAS",
        "canton": "ELOY ALFARO",
        "parroquia": "VALDEZ (LIMONES)",
        "poblacion": "VALDEZ",
        "z": 0.5
      },
      {
        "id": 148,
        "provincia": "ESMERALDAS",
        "canton": "MUISNE",
        "parroquia": "MUISNE",
        "poblacion": "MUISNE",
        "z": 0.5
      },
      {
        "id": 149,
        "provincia": "GUAYAS",
        "canton": "GUAYAQUIL",
        "parroquia": "JUAN GOMEZ RENDON (PROGRESO)",
        "poblacion": "JUAN GOMEZ RENDON",
        "z": 0.5
      },
      {
        "id": 150,
        "provincia": "GUAYAS",
        "canton": "PLAYAS",
        "parroquia": "GENERAL VILLAMIL (PLAYAS)",
        "poblacion": "GENERAL VILLAMIL",
        "z": 0.5
      },
      {
        "id": 151,
        "provincia": "GUAYAS",
        "canton": "PEDRO CARBO",
        "parroquia": "PEDRO CARBO",
        "poblacion": "LA ESTACADA",
        "z": 0.5
      },
      {
        "id": 152,
        "provincia": "GUAYAS",
        "canton": "GUAYAQUIL",
        "parroquia": "JUAN GOMEZ RENDON (PROGRESO)",
        "poblacion": "SAN LORENZO",
        "z": 0.5
      },
      {
        "id": 153,
        "provincia": "GUAYAS",
        "canton": "EMPALME",
        "parroquia": "GUAYAS (PUEBLO NUEVO)",
        "poblacion": "SAN CAMILO",
        "z": 0.35
      },
      {
        "id": 154,
        "provincia": "GUAYAS",
        "canton": "SAN JACINTO DE YAGUACHI",
        "parroquia": "SAN JACINTO DE YAGUACHI",
        "poblacion": "SAN JACINTO DE YAGUACHI",
        "z": 0.35
      },
      {
        "id": 155,
        "provincia": "GUAYAS",
        "canton": "MILAGRO",
        "parroquia": "MARISCAL SUCRE (HUAQUES)",
        "poblacion": "MARISCAL SUCRE",
        "z": 0.35
      },
      {
        "id": 156,
        "provincia": "GUAYAS",
        "canton": "SIMON BOLIVAR",
        "parroquia": "CRNEL. LORENZO DE GARAICOA",
        "poblacion": "LORENZO DE GARAICOA",
        "z": 0.35
      },
      {
        "id": 157,
        "provincia": "GUAYAS",
        "canton": "SIMON BOLIVAR",
        "parroquia": "SIMON BOLIVAR",
        "poblacion": "SANTO DOMINGO",
        "z": 0.35
      },
      {
        "id": 158,
        "provincia": "GUAYAS",
        "canton": "SAMBORONDON",
        "parroquia": "SAMBORONDON",
        "poblacion": "SAMBORONDON",
        "z": 0.35
      },
      {
        "id": 159,
        "provincia": "GUAYAS",
        "canton": "SALITRE",
        "parroquia": "GRAL. VERNAZA (DOS ESTEROS)",
        "poblacion": "GENERAL VERNAZA",
        "z": 0.35
      },
      {
        "id": 160,
        "provincia": "GUAYAS",
        "canton": "SIMON BOLIVAR",
        "parroquia": "CRNEL. LORENZO DE GARAICOA",
        "poblacion": "MATA DE CACAO",
        "z": 0.35
      },
      {
        "id": 161,
        "provincia": "GUAYAS",
        "canton": "EMPALME",
        "parroquia": "VELASCO IBARRA (CAB. EL EMPALME)",
        "poblacion": "VELASCO IBARRA",
        "z": 0.35
      },
      {
        "id": 162,
        "provincia": "GUAYAS",
        "canton": "MILAGRO",
        "parroquia": "MILAGRO",
        "poblacion": "MILAGRO",
        "z": 0.35
      },
      {
        "id": 163,
        "provincia": "GUAYAS",
        "canton": "SAN JACINTO DE YAGUACHI",
        "parroquia": "GRAL. PEDRO J. MONTERO (BOLICHE)",
        "poblacion": "PEDRO J. MONTERO",
        "z": 0.35
      },
      {
        "id": 164,
        "provincia": "GUAYAS",
        "canton": "NARANJITO",
        "parroquia": "NARANJITO",
        "poblacion": "NARANJITO",
        "z": 0.35
      },
      {
        "id": 165,
        "provincia": "GUAYAS",
        "canton": "CRNEL. MARCELINO MARIDUE�A",
        "parroquia": "CRNEL. MARCELINO MARIDUE�A",
        "poblacion": "CORONEL MARCELINO MARIDUE�A",
        "z": 0.35
      },
      {
        "id": 166,
        "provincia": "GUAYAS",
        "canton": "ALFREDO BAQUERIZO MORENO",
        "parroquia": "ALFREDO BAQUERIZO MORENO",
        "poblacion": "ALFREDO BAQUERIZO MORENO",
        "z": 0.3
      },
      {
        "id": 167,
        "provincia": "GUAYAS",
        "canton": "EMPALME",
        "parroquia": "GUAYAS (PUEBLO NUEVO)",
        "poblacion": "CARLOS J. AROSEMENA",
        "z": 0.4
      },
      {
        "id": 168,
        "provincia": "GUAYAS",
        "canton": "BALZAR",
        "parroquia": "BALZAR",
        "poblacion": "LA GUAYAQUIL",
        "z": 0.4
      },
      {
        "id": 169,
        "provincia": "GUAYAS",
        "canton": "PALESTINA",
        "parroquia": "PALESTINA",
        "poblacion": "PALESTINA",
        "z": 0.4
      },
      {
        "id": 170,
        "provincia": "GUAYAS",
        "canton": "EMPALME",
        "parroquia": "EL ROSARIO",
        "poblacion": "PEDRO VELEZ",
        "z": 0.4
      },
      {
        "id": 171,
        "provincia": "GUAYAS",
        "canton": "EMPALME",
        "parroquia": "EL ROSARIO",
        "poblacion": "SANTA LUCIA",
        "z": 0.4
      },
      {
        "id": 172,
        "provincia": "GUAYAS",
        "canton": "BALZAR",
        "parroquia": "BALZAR",
        "poblacion": "BALZAR",
        "z": 0.4
      },
      {
        "id": 173,
        "provincia": "GUAYAS",
        "canton": "SANTA LUCIA",
        "parroquia": "SANTA LUCIA",
        "poblacion": "SANTA LUCIA",
        "z": 0.4
      },
      {
        "id": 174,
        "provincia": "GUAYAS",
        "canton": "SALITRE",
        "parroquia": "JUNQUILLAL",
        "poblacion": "JUNQUILLAL",
        "z": 0.4
      },
      {
        "id": 175,
        "provincia": "GUAYAS",
        "canton": "BALZAR",
        "parroquia": "BALZAR",
        "poblacion": "CERRITOS",
        "z": 0.4
      },
      {
        "id": 176,
        "provincia": "GUAYAS",
        "canton": "SALITRE",
        "parroquia": "EL SALITRE (LAS RAMAS)",
        "poblacion": "EL SALITRE",
        "z": 0.4
      },
      {
        "id": 177,
        "provincia": "GUAYAS",
        "canton": "DAULE",
        "parroquia": "DAULE",
        "poblacion": "DAULE",
        "z": 0.4
      },
      {
        "id": 178,
        "provincia": "GUAYAS",
        "canton": "COLIMES",
        "parroquia": "COLIMES",
        "poblacion": "COLIMES",
        "z": 0.4
      },
      {
        "id": 179,
        "provincia": "GUAYAS",
        "canton": "PEDRO CARBO",
        "parroquia": "VALLE DE LA VIRGEN",
        "poblacion": "CASCAJAL",
        "z": 0.4
      },
      {
        "id": 180,
        "provincia": "GUAYAS",
        "canton": "PEDRO CARBO",
        "parroquia": "PEDRO CARBO",
        "poblacion": "ZAMORA NUEVO",
        "z": 0.4
      },
      {
        "id": 181,
        "provincia": "GUAYAS",
        "canton": "DAULE",
        "parroquia": "LIMONAL",
        "poblacion": "EL PI�AL DE ABAJO",
        "z": 0.4
      },
      {
        "id": 182,
        "provincia": "GUAYAS",
        "canton": "PEDRO CARBO",
        "parroquia": "PEDRO CARBO",
        "poblacion": "PEDRO CARBO",
        "z": 0.4
      },
      {
        "id": 183,
        "provincia": "GUAYAS",
        "canton": "LOMAS DE SARGENTILLO",
        "parroquia": "LOMAS DE SARGENTILLO",
        "poblacion": "LAS CA�AS",
        "z": 0.4
      },
      {
        "id": 184,
        "provincia": "GUAYAS",
        "canton": "ISIDRO AYORA",
        "parroquia": "ISIDRO AYORA",
        "poblacion": "PUEBLO NUEVO",
        "z": 0.4
      },
      {
        "id": 185,
        "provincia": "GUAYAS",
        "canton": "ISIDRO AYORA",
        "parroquia": "ISIDRO AYORA",
        "poblacion": "LAS MERCEDES",
        "z": 0.4
      },
      {
        "id": 186,
        "provincia": "GUAYAS",
        "canton": "PEDRO CARBO",
        "parroquia": "SABANILLA",
        "poblacion": "SABANILLA",
        "z": 0.4
      },
      {
        "id": 187,
        "provincia": "GUAYAS",
        "canton": "ISIDRO AYORA",
        "parroquia": "ISIDRO AYORA",
        "poblacion": "ISIDRO AYORA",
        "z": 0.4
      },
      {
        "id": 188,
        "provincia": "GUAYAS",
        "canton": "LOMAS DE SARGENTILLO",
        "parroquia": "LOMAS DE SARGENTILLO",
        "poblacion": "LOMAS DE SARGENTILLO",
        "z": 0.4
      },
      {
        "id": 189,
        "provincia": "GUAYAS",
        "canton": "BALAO",
        "parroquia": "BALAO",
        "poblacion": "BALAO",
        "z": 0.4
      },
      {
        "id": 190,
        "provincia": "GUAYAS",
        "canton": "NARANJAL",
        "parroquia": "NARANJAL",
        "poblacion": "NARANJAL",
        "z": 0.4
      },
      {
        "id": 191,
        "provincia": "GUAYAS",
        "canton": "EL TRIUNFO",
        "parroquia": "EL TRIUNFO",
        "poblacion": "EL TRIUNFO",
        "z": 0.4
      },
      {
        "id": 192,
        "provincia": "GUAYAS",
        "canton": "SAN JACINTO DE YAGUACHI",
        "parroquia": "VIRGEN DE FATIMA",
        "poblacion": "TAURA",
        "z": 0.4
      },
      {
        "id": 193,
        "provincia": "GUAYAS",
        "canton": "NOBOL",
        "parroquia": "NARCISA DE JESUS",
        "poblacion": "NARCIZA DE JESUS",
        "z": 0.4
      },
      {
        "id": 194,
        "provincia": "GUAYAS",
        "canton": "DAULE",
        "parroquia": "DAULE",
        "poblacion": "DAULE",
        "z": 0.4
      },
      {
        "id": 195,
        "provincia": "GUAYAS",
        "canton": "SAMBORONDON",
        "parroquia": "SAMBORONDON",
        "poblacion": "LA PUNTILLA",
        "z": 0.4
      },
      {
        "id": 196,
        "provincia": "GUAYAS",
        "canton": "SALITRE",
        "parroquia": "JUNQUILLAL",
        "poblacion": "LAUREL",
        "z": 0.4
      },
      {
        "id": 197,
        "provincia": "GUAYAS",
        "canton": "DAULE",
        "parroquia": "LAUREL",
        "poblacion": "LAUREL",
        "z": 0.4
      },
      {
        "id": 198,
        "provincia": "GUAYAS",
        "canton": "SIMON BOLIVAR",
        "parroquia": "SIMON BOLIVAR",
        "poblacion": "PUEBLO NUEVO",
        "z": 0.5
      },
      {
        "id": 199,
        "provincia": "GUAYAS",
        "canton": "SIMON BOLIVAR",
        "parroquia": "SIMON BOLIVAR",
        "poblacion": "SIMON BOLIVAR",
        "z": 0.5
      },
      {
        "id": 200,
        "provincia": "GUAYAS",
        "canton": "SAN JACINTO DE YAGUACHI",
        "parroquia": "VIRGEN DE FATIMA",
        "poblacion": "KILOMETRO VEINTE Y SEIS",
        "z": 0.35
      },
      {
        "id": 201,
        "provincia": "GUAYAS",
        "canton": "DURAN",
        "parroquia": "ELOY ALFARO (DURAN)",
        "poblacion": "ELOY ALFARO",
        "z": 0.4
      },
      {
        "id": 202,
        "provincia": "GUAYAS",
        "canton": "GUAYAQUIL",
        "parroquia": "GUAYAQUIL",
        "poblacion": "GUAYAQUIL",
        "z": 0.4
      },
      {
        "id": 203,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "AMBUQUI",
        "poblacion": "CARPUELA",
        "z": 0.4
      },
      {
        "id": 204,
        "provincia": "IMBABURA",
        "canton": "PIMAMPIRO",
        "parroquia": "PIMAMPIRO",
        "poblacion": "CHALGUAYACU",
        "z": 0.4
      },
      {
        "id": 205,
        "provincia": "IMBABURA",
        "canton": "PIMAMPIRO",
        "parroquia": "PIMAMPIRO",
        "poblacion": "PIMAMPIRO",
        "z": 0.4
      },
      {
        "id": 206,
        "provincia": "IMBABURA",
        "canton": "PIMAMPIRO",
        "parroquia": "MARIANO ACOSTA",
        "poblacion": "MARIANO ACOSTA",
        "z": 0.4
      },
      {
        "id": 207,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "AMBUQUI",
        "poblacion": "EL JUNCAL",
        "z": 0.4
      },
      {
        "id": 208,
        "provincia": "IMBABURA",
        "canton": "OTAVALO",
        "parroquia": "SAN RAFAEL",
        "poblacion": "SAN RAFAEL",
        "z": 0.4
      },
      {
        "id": 209,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "AMBUQUI",
        "poblacion": "AMBUQUI",
        "z": 0.4
      },
      {
        "id": 210,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "SAN ANTONIO",
        "poblacion": "SAN ANTONIO DE IBARRA",
        "z": 0.4
      },
      {
        "id": 211,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "SAN ANTONIO",
        "poblacion": "SAN FRANCISCO DE NATABUELA",
        "z": 0.4
      },
      {
        "id": 212,
        "provincia": "IMBABURA",
        "canton": "ANTONIO ANTE",
        "parroquia": "SAN JOSE DE CHALTURA",
        "poblacion": "SAN JOSE  DE CHALTURA",
        "z": 0.4
      },
      {
        "id": 213,
        "provincia": "IMBABURA",
        "canton": "COTACACHI",
        "parroquia": "IMANTAG",
        "poblacion": "IMANTAG",
        "z": 0.4
      },
      {
        "id": 214,
        "provincia": "IMBABURA",
        "canton": "COTACACHI",
        "parroquia": "COTACACHI",
        "poblacion": "COTACACHI",
        "z": 0.4
      },
      {
        "id": 215,
        "provincia": "IMBABURA",
        "canton": "COTACACHI",
        "parroquia": "QUIROGA",
        "poblacion": "QUIROGA",
        "z": 0.4
      },
      {
        "id": 216,
        "provincia": "IMBABURA",
        "canton": "ANTONIO ANTE",
        "parroquia": "IMBAYA (SAN LUIS DE COBUENDO)",
        "poblacion": "SAN MIGUEL DE IBARRA",
        "z": 0.4
      },
      {
        "id": 217,
        "provincia": "IMBABURA",
        "canton": "COTACACHI",
        "parroquia": "COTACACHI",
        "poblacion": "LA CALERA",
        "z": 0.4
      },
      {
        "id": 218,
        "provincia": "IMBABURA",
        "canton": "ANTONIO ANTE",
        "parroquia": "SAN ROQUE",
        "poblacion": "SAN ROQUE",
        "z": 0.4
      },
      {
        "id": 219,
        "provincia": "IMBABURA",
        "canton": "OTAVALO",
        "parroquia": "SAN JUAN DE ILUMAN",
        "poblacion": "SAN JUAN DE ILUMAN",
        "z": 0.4
      },
      {
        "id": 220,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "SALINAS",
        "poblacion": "SALINAS",
        "z": 0.4
      },
      {
        "id": 221,
        "provincia": "IMBABURA",
        "canton": "SAN MIGUEL DE URCUQUI",
        "parroquia": "CAHUASQUI",
        "poblacion": "CAHUASQUI",
        "z": 0.4
      },
      {
        "id": 222,
        "provincia": "IMBABURA",
        "canton": "SAN MIGUEL DE URCUQUI",
        "parroquia": "PABLO ARENAS",
        "poblacion": "PABLO ARENAS",
        "z": 0.4
      },
      {
        "id": 223,
        "provincia": "IMBABURA",
        "canton": "SAN MIGUEL DE URCUQUI",
        "parroquia": "TUMBABIRO",
        "poblacion": "TUMBABIRO",
        "z": 0.4
      },
      {
        "id": 224,
        "provincia": "IMBABURA",
        "canton": "SAN MIGUEL DE URCUQUI",
        "parroquia": "URCUQUI",
        "poblacion": "SAN BLAS",
        "z": 0.4
      },
      {
        "id": 225,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "SAN MIGUEL DE IBARRA",
        "poblacion": "PRIORATO",
        "z": 0.4
      },
      {
        "id": 226,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "SAN MIGUEL DE IBARRA",
        "poblacion": "SAN MIGUEL DE YAHUARCOCHA",
        "z": 0.4
      },
      {
        "id": 227,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "SAN MIGUEL DE IBARRA",
        "poblacion": "CARANQUI",
        "z": 0.4
      },
      {
        "id": 228,
        "provincia": "IMBABURA",
        "canton": "IBARRA",
        "parroquia": "SAN MIGUEL DE IBARRA",
        "poblacion": "SANTA ROSA",
        "z": 0.4
      },
      {
        "id": 229,
        "provincia": "IMBABURA",
        "canton": "OTAVALO",
        "parroquia": "DOCTOR MIGUEL EGAS CABEZAS",
        "poblacion": "OTAVALO",
        "z": 0.4
      },
      {
        "id": 230,
        "provincia": "IMBABURA",
        "canton": "OTAVALO",
        "parroquia": "EUGENIO ESPEJO (CALPAQUI)",
        "poblacion": "CRUZ LOMA",
        "z": 0.4
      },
      {
        "id": 231,
        "provincia": "IMBABURA",
        "canton": "OTAVALO",
        "parroquia": "SAN JOSE DE QUICHINCHE",
        "poblacion": "SAN JOSE DE QUICHINCHE",
        "z": 0.4
      },
      {
        "id": 232,
        "provincia": "IMBABURA",
        "canton": "OTAVALO",
        "parroquia": "SAN PABLO",
        "poblacion": "SAN PABLO DEL  LAGO",
        "z": 0.4
      },
      {
        "id": 233,
        "provincia": "IMBABURA",
        "canton": "OTAVALO",
        "parroquia": "GONZALEZ SUAREZ",
        "poblacion": "GONZALEZ SUAREZ",
        "z": 0.4
      },
      {
        "id": 234,
        "provincia": "IMBABURA",
        "canton": "ANTONIO ANTE",
        "parroquia": "SAN JOSE DE CHALTURA",
        "poblacion": "ATUNTAQUI",
        "z": 0.4
      },
      {
        "id": 235,
        "provincia": "IMBABURA",
        "canton": "SAN MIGUEL DE URCUQUI",
        "parroquia": "URCUQUI",
        "poblacion": "URCUQUI",
        "z": 0.4
      },
      {
        "id": 236,
        "provincia": "LOJA",
        "canton": "CHAGUARPAMBA",
        "parroquia": "CHAGUARPAMBA",
        "poblacion": "CHAGUARPAMBA",
        "z": 0.3
      },
      {
        "id": 237,
        "provincia": "LOJA",
        "canton": "PALTAS",
        "parroquia": "CATACOCHA",
        "poblacion": "CATACOCHA",
        "z": 0.3
      },
      {
        "id": 238,
        "provincia": "LOJA",
        "canton": "PUYANGO",
        "parroquia": "ALAMOR",
        "poblacion": "ALAMOR",
        "z": 0.4
      },
      {
        "id": 239,
        "provincia": "LOJA",
        "canton": "MACARA",
        "parroquia": "MACARA",
        "poblacion": "MACARA",
        "z": 0.35
      },
      {
        "id": 240,
        "provincia": "LOJA",
        "canton": "CELICA",
        "parroquia": "CELICA",
        "poblacion": "CELICA",
        "z": 0.35
      },
      {
        "id": 241,
        "provincia": "LOJA",
        "canton": "SOZORANGA",
        "parroquia": "SOZORANGA",
        "poblacion": "SOZORANGA",
        "z": 0.35
      },
      {
        "id": 242,
        "provincia": "LOJA",
        "canton": "CATAMAYO",
        "parroquia": "CATAMAYO (LA TOMA)",
        "poblacion": "CATAMAYO",
        "z": 0.25
      },
      {
        "id": 243,
        "provincia": "LOJA",
        "canton": "ESPINDOLA",
        "parroquia": "AMALUZA",
        "poblacion": "AMALUZA",
        "z": 0.25
      },
      {
        "id": 244,
        "provincia": "LOJA",
        "canton": "QUILANGA",
        "parroquia": "QUILANGA",
        "poblacion": "QUILANGA",
        "z": 0.25
      },
      {
        "id": 245,
        "provincia": "LOJA",
        "canton": "CALVAS",
        "parroquia": "CARIAMANGA",
        "poblacion": "CARIAMANGA",
        "z": 0.25
      },
      {
        "id": 246,
        "provincia": "LOJA",
        "canton": "LOJA",
        "parroquia": "LOJA",
        "poblacion": "LOJA",
        "z": 0.25
      },
      {
        "id": 247,
        "provincia": "LOS RIOS",
        "canton": "BUENA FE",
        "parroquia": "SAN JACINTO DE BUENA FE",
        "poblacion": "SAN JACINTO DE BUENA FE",
        "z": 0.35
      },
      {
        "id": 248,
        "provincia": "LOS RIOS",
        "canton": "PALENQUE",
        "parroquia": "PALENQUE",
        "poblacion": "JAUNECHE",
        "z": 0.35
      },
      {
        "id": 249,
        "provincia": "LOS RIOS",
        "canton": "VINCES",
        "parroquia": "ANTONIO SOTOMAYOR",
        "poblacion": "ANTONIO SOTOMAYOR",
        "z": 0.35
      },
      {
        "id": 250,
        "provincia": "LOS RIOS",
        "canton": "BABA",
        "parroquia": "BABA",
        "poblacion": "BABA",
        "z": 0.35
      },
      {
        "id": 251,
        "provincia": "LOS RIOS",
        "canton": "QUEVEDO",
        "parroquia": "QUEVEDO",
        "poblacion": "QUEVEDO",
        "z": 0.35
      },
      {
        "id": 252,
        "provincia": "LOS RIOS",
        "canton": "VINCES",
        "parroquia": "VINCES",
        "poblacion": "VINCES",
        "z": 0.35
      },
      {
        "id": 253,
        "provincia": "LOS RIOS",
        "canton": "PALENQUE",
        "parroquia": "PALENQUE",
        "poblacion": "PALENQUE",
        "z": 0.35
      },
      {
        "id": 254,
        "provincia": "LOS RIOS",
        "canton": "BABAHOYO",
        "parroquia": "LA UNION",
        "poblacion": "LA UNION",
        "z": 0.3
      },
      {
        "id": 255,
        "provincia": "LOS RIOS",
        "canton": "VALENCIA",
        "parroquia": "VALENCIA",
        "poblacion": "COSTA AZUL",
        "z": 0.3
      },
      {
        "id": 256,
        "provincia": "LOS RIOS",
        "canton": "VALENCIA",
        "parroquia": "VALENCIA",
        "poblacion": "VALENCIA",
        "z": 0.3
      },
      {
        "id": 257,
        "provincia": "LOS RIOS",
        "canton": "MONTALVO",
        "parroquia": "MONTALVO",
        "poblacion": "MONTALVO",
        "z": 0.3
      },
      {
        "id": 258,
        "provincia": "LOS RIOS",
        "canton": "QUINSALOMA",
        "parroquia": "QUINSALOMA",
        "poblacion": "QUINSALOMA",
        "z": 0.3
      },
      {
        "id": 259,
        "provincia": "LOS RIOS",
        "canton": "PUEBLOVIEJO",
        "parroquia": "SAN JUAN",
        "poblacion": "SAN JUAN",
        "z": 0.3
      },
      {
        "id": 260,
        "provincia": "LOS RIOS",
        "canton": "QUEVEDO",
        "parroquia": "SAN CARLOS",
        "poblacion": "SAN CARLOS",
        "z": 0.3
      },
      {
        "id": 261,
        "provincia": "LOS RIOS",
        "canton": "MOCACHE",
        "parroquia": "MOCACHE",
        "poblacion": "MOCACHE",
        "z": 0.3
      },
      {
        "id": 262,
        "provincia": "LOS RIOS",
        "canton": "PUEBLOVIEJO",
        "parroquia": "PUEBLOVIEJO",
        "poblacion": "PUEBLOVIEJO",
        "z": 0.3
      },
      {
        "id": 263,
        "provincia": "LOS RIOS",
        "canton": "URDANETA",
        "parroquia": "CATARAMA",
        "poblacion": "CATARAMA",
        "z": 0.3
      },
      {
        "id": 264,
        "provincia": "LOS RIOS",
        "canton": "BABAHOYO",
        "parroquia": "BABAHOYO",
        "poblacion": "BABAHOYO",
        "z": 0.3
      },
      {
        "id": 265,
        "provincia": "LOS RIOS",
        "canton": "VENTANAS",
        "parroquia": "VENTANAS",
        "poblacion": "VENTANAS",
        "z": 0.3
      },
      {
        "id": 266,
        "provincia": "LOS RIOS",
        "canton": "BUENA FE",
        "parroquia": "PATRICIA PILAR",
        "poblacion": "PATRICIA PILAR",
        "z": 0.4
      },
      {
        "id": 267,
        "provincia": "MANABI",
        "canton": "PORTOVIEJO",
        "parroquia": "PORTOVIEJO",
        "poblacion": "COLON",
        "z": 0.5
      },
      {
        "id": 268,
        "provincia": "MANABI",
        "canton": "JIPIJAPA",
        "parroquia": "JULCUY",
        "poblacion": "JULCUY",
        "z": 0.5
      },
      {
        "id": 269,
        "provincia": "MANABI",
        "canton": "SUCRE",
        "parroquia": "CHARAPOTO",
        "poblacion": "CHARAPOTO",
        "z": 0.5
      },
      {
        "id": 270,
        "provincia": "MANABI",
        "canton": "FLAVIO ALFARO",
        "parroquia": "FLAVIO ALFARO",
        "poblacion": "FLAVIO ALFARO",
        "z": 0.5
      },
      {
        "id": 271,
        "provincia": "MANABI",
        "canton": "EL CARMEN",
        "parroquia": "SAN PEDRO DE SUMA",
        "poblacion": "SAN PEDRO DE SUMA",
        "z": 0.5
      },
      {
        "id": 272,
        "provincia": "MANABI",
        "canton": "ROCAFUERTE",
        "parroquia": "ROCAFUERTE",
        "poblacion": "ROCAFUERTE",
        "z": 0.5
      },
      {
        "id": 273,
        "provincia": "MANABI",
        "canton": "PORTOVIEJO",
        "parroquia": "RIOCHICO (RIO CHICO)",
        "poblacion": "RIOCHICO",
        "z": 0.5
      },
      {
        "id": 274,
        "provincia": "MANABI",
        "canton": "BAHIA DE CARAQUEZ",
        "parroquia": "SAN ISIDRO",
        "poblacion": "SAN ISIDRO",
        "z": 0.5
      },
      {
        "id": 275,
        "provincia": "MANABI",
        "canton": "CHONE",
        "parroquia": "ELOY ALFARO",
        "poblacion": "ELOY ALFARO",
        "z": 0.5
      },
      {
        "id": 276,
        "provincia": "MANABI",
        "canton": "SUCRE",
        "parroquia": "CHARAPOTO",
        "poblacion": "SAN JACINTO",
        "z": 0.5
      },
      {
        "id": 277,
        "provincia": "MANABI",
        "canton": "SAN VICENTE",
        "parroquia": "SAN VICENTE",
        "poblacion": "SAN VICENTE",
        "z": 0.5
      },
      {
        "id": 278,
        "provincia": "MANABI",
        "canton": "SUCRE",
        "parroquia": "BAHIA DE CARAQUEZ",
        "poblacion": "LEONIDAS PLAZA",
        "z": 0.5
      },
      {
        "id": 279,
        "provincia": "MANABI",
        "canton": "BOLIVAR",
        "parroquia": "CALCETA",
        "poblacion": "CALCETA",
        "z": 0.5
      },
      {
        "id": 280,
        "provincia": "MANABI",
        "canton": "JARAMIJO",
        "parroquia": "JARAMIJO",
        "poblacion": "JARAMIJO",
        "z": 0.5
      },
      {
        "id": 281,
        "provincia": "MANABI",
        "canton": "SANTA ANA",
        "parroquia": "SANTA ANA DE VUELTA LARGA",
        "poblacion": "SANTA ANA DE VUELTA LARGA",
        "z": 0.5
      },
      {
        "id": 282,
        "provincia": "MANABI",
        "canton": "CHONE",
        "parroquia": "CHONE",
        "poblacion": "CHONE",
        "z": 0.5
      },
      {
        "id": 283,
        "provincia": "MANABI",
        "canton": "MANTA",
        "parroquia": "MANTA",
        "poblacion": "EL AROMO",
        "z": 0.5
      },
      {
        "id": 284,
        "provincia": "MANABI",
        "canton": "MONTECRISTI",
        "parroquia": "MONTECRISTI",
        "poblacion": "PILES",
        "z": 0.5
      },
      {
        "id": 285,
        "provincia": "MANABI",
        "canton": "MANTA",
        "parroquia": "SAN LORENZO",
        "poblacion": "SAN LORENZO",
        "z": 0.5
      },
      {
        "id": 286,
        "provincia": "MANABI",
        "canton": "MANTA",
        "parroquia": "SANTA MARIANITA",
        "poblacion": "PACOCHE ABAJO",
        "z": 0.5
      },
      {
        "id": 287,
        "provincia": "MANABI",
        "canton": "PORTOVIEJO",
        "parroquia": "PORTOVIEJO",
        "poblacion": "EL LIMON",
        "z": 0.5
      },
      {
        "id": 288,
        "provincia": "MANABI",
        "canton": "PORTOVIEJO",
        "parroquia": "ABDON CALDERON (SAN FRANCISCO)",
        "poblacion": "CALDERON",
        "z": 0.5
      },
      {
        "id": 289,
        "provincia": "MANABI",
        "canton": "PORTOVIEJO",
        "parroquia": "PORTOVIEJO",
        "poblacion": "PORTOVIEJO",
        "z": 0.5
      },
      {
        "id": 290,
        "provincia": "MANABI",
        "canton": "PORTOVIEJO",
        "parroquia": "SAN PLACIDO",
        "poblacion": "SAN PLACIDO",
        "z": 0.5
      },
      {
        "id": 291,
        "provincia": "MANABI",
        "canton": "24 DE MAYO",
        "parroquia": "SUCRE",
        "poblacion": "SUCRE",
        "z": 0.5
      },
      {
        "id": 292,
        "provincia": "MANABI",
        "canton": "JIPIJAPA",
        "parroquia": "JIPIJAPA",
        "poblacion": "SANCAN",
        "z": 0.5
      },
      {
        "id": 293,
        "provincia": "MANABI",
        "canton": "JIPIJAPA",
        "parroquia": "MEMBRILLAL",
        "poblacion": "MEMBRILLAL",
        "z": 0.5
      },
      {
        "id": 294,
        "provincia": "MANABI",
        "canton": "MONTECRISTI",
        "parroquia": "MONTECRISTI",
        "poblacion": "RIO DE CA�A",
        "z": 0.5
      },
      {
        "id": 295,
        "provincia": "MANABI",
        "canton": "JIPIJAPA",
        "parroquia": "JIPIJAPA",
        "poblacion": "JIPIJAPA",
        "z": 0.5
      },
      {
        "id": 296,
        "provincia": "MANABI",
        "canton": "JIPIJAPA",
        "parroquia": "EL ANEGADO (CAB EN ELOY ALFARO)",
        "poblacion": "EL ANEGADO",
        "z": 0.5
      },
      {
        "id": 297,
        "provincia": "MANABI",
        "canton": "24 DE MAYO",
        "parroquia": "BELLAVISTA",
        "poblacion": "EL ESFUERZO",
        "z": 0.5
      },
      {
        "id": 298,
        "provincia": "MANABI",
        "canton": "24 DE MAYO",
        "parroquia": "NOBOA",
        "poblacion": "NOBOA",
        "z": 0.5
      },
      {
        "id": 299,
        "provincia": "MANABI",
        "canton": "OLMEDO",
        "parroquia": "OLMEDO",
        "poblacion": "BELLAVISTA",
        "z": 0.5
      },
      {
        "id": 300,
        "provincia": "MANABI",
        "canton": "PAJAN",
        "parroquia": "PAJAN",
        "poblacion": "PAJAN",
        "z": 0.5
      },
      {
        "id": 301,
        "provincia": "MANABI",
        "canton": "PAJAN",
        "parroquia": "CASCOL",
        "poblacion": "CASCOL",
        "z": 0.5
      },
      {
        "id": 302,
        "provincia": "MANABI",
        "canton": "JIPIJAPA",
        "parroquia": "PEDRO PABLO GOMEZ",
        "poblacion": "PEDRO PABLO GOMEZ",
        "z": 0.5
      },
      {
        "id": 303,
        "provincia": "MANABI",
        "canton": "PUERTO LOPEZ",
        "parroquia": "SALANGO",
        "poblacion": "SALANGO",
        "z": 0.5
      },
      {
        "id": 304,
        "provincia": "MANABI",
        "canton": "PUERTO LOPEZ",
        "parroquia": "SALANGO",
        "poblacion": "RIO CHICO",
        "z": 0.5
      },
      {
        "id": 305,
        "provincia": "MANABI",
        "canton": "PUERTO LOPEZ",
        "parroquia": "PUERTO LOPEZ",
        "poblacion": "PUERTO LOPEZ",
        "z": 0.5
      },
      {
        "id": 306,
        "provincia": "MANABI",
        "canton": "PUERTO LOPEZ",
        "parroquia": "SALANGO",
        "poblacion": "AYAMPE",
        "z": 0.5
      },
      {
        "id": 307,
        "provincia": "MANABI",
        "canton": "MONTECRISTI",
        "parroquia": "MONTECRISTI",
        "poblacion": "MONTECRISTI",
        "z": 0.5
      },
      {
        "id": 308,
        "provincia": "MANABI",
        "canton": "JIPIJAPA",
        "parroquia": "EL ANEGADO (CAB EN ELOY ALFARO)",
        "poblacion": "AGUA PATO",
        "z": 0.5
      },
      {
        "id": 309,
        "provincia": "MANABI",
        "canton": "PEDERNALES",
        "parroquia": "COJIMIES",
        "poblacion": "COJIMIES",
        "z": 0.5
      },
      {
        "id": 310,
        "provincia": "MANABI",
        "canton": "PEDERNALES",
        "parroquia": "PEDERNALES",
        "poblacion": "PEDERNALES",
        "z": 0.5
      },
      {
        "id": 311,
        "provincia": "MANABI",
        "canton": "BOLIVAR",
        "parroquia": "QUIROGA",
        "poblacion": "QUIROGA",
        "z": 0.5
      },
      {
        "id": 312,
        "provincia": "MANABI",
        "canton": "JUNIN",
        "parroquia": "JUNIN",
        "poblacion": "JUNIN",
        "z": 0.5
      },
      {
        "id": 313,
        "provincia": "MANABI",
        "canton": "CHONE",
        "parroquia": "CANUTO",
        "poblacion": "CANUTO",
        "z": 0.5
      },
      {
        "id": 314,
        "provincia": "MANABI",
        "canton": "TOSAGUA",
        "parroquia": "TOSAGUA",
        "poblacion": "TOSAGUA",
        "z": 0.5
      },
      {
        "id": 315,
        "provincia": "MANABI",
        "canton": "SUCRE",
        "parroquia": "CHARAPOTO",
        "poblacion": "EL PUEBLITO",
        "z": 0.5
      },
      {
        "id": 316,
        "provincia": "MANABI",
        "canton": "JAMA",
        "parroquia": "JAMA",
        "poblacion": "JAMA",
        "z": 0.5
      },
      {
        "id": 317,
        "provincia": "MANABI",
        "canton": "MONTECRISTI",
        "parroquia": "MONTECRISTI",
        "poblacion": "MANTA",
        "z": 0.5
      },
      {
        "id": 318,
        "provincia": "MANABI",
        "canton": "SUCRE",
        "parroquia": "CHARAPOTO",
        "poblacion": "SAN CLEMENTE",
        "z": 0.5
      },
      {
        "id": 319,
        "provincia": "MANABI",
        "canton": "SANTA ANA",
        "parroquia": "SAN PABLO (PUEBLO NUEVO)",
        "poblacion": "SAN PABLO",
        "z": 0.4
      },
      {
        "id": 320,
        "provincia": "MANABI",
        "canton": "EL CARMEN",
        "parroquia": "EL CARMEN",
        "poblacion": "EL CARMEN",
        "z": 0.4
      },
      {
        "id": 321,
        "provincia": "MANABI",
        "canton": "EL CARMEN",
        "parroquia": "EL CARMEN",
        "poblacion": "LA BRAMADORA",
        "z": 0.4
      },
      {
        "id": 322,
        "provincia": "MANABI",
        "canton": "PICHINCHA",
        "parroquia": "BARRAGANETE",
        "poblacion": "BARRAGANETE",
        "z": 0.4
      },
      {
        "id": 323,
        "provincia": "MANABI",
        "canton": "BOLIVAR",
        "parroquia": "MEMBRILLO",
        "poblacion": "MEMBRILLO",
        "z": 0.4
      },
      {
        "id": 324,
        "provincia": "MANABI",
        "canton": "OLMEDO",
        "parroquia": "OLMEDO",
        "poblacion": "OLMEDO",
        "z": 0.4
      },
      {
        "id": 325,
        "provincia": "MANABI",
        "canton": "PICHINCHA",
        "parroquia": "PICHINCHA",
        "poblacion": "PICHINCHA",
        "z": 0.4
      },
      {
        "id": 326,
        "provincia": "MANABI",
        "canton": "SANTA ANA",
        "parroquia": "LA UNION",
        "poblacion": "LA UNION",
        "z": 0.4
      },
      {
        "id": 327,
        "provincia": "MANABI",
        "canton": "PAJAN",
        "parroquia": "LASCANO",
        "poblacion": "LASCANO",
        "z": 0.4
      },
      {
        "id": 328,
        "provincia": "MANABI",
        "canton": "PAJAN",
        "parroquia": "GUALE",
        "poblacion": "GUALE",
        "z": 0.4
      },
      {
        "id": 329,
        "provincia": "MANABI",
        "canton": "SUCRE",
        "parroquia": "BAHIA DE CARAQUEZ",
        "poblacion": "BAHIA DE CARAQUEZ",
        "z": 0.5
      },
      {
        "id": 330,
        "provincia": "MANABI",
        "canton": "PUERTO LOPEZ",
        "parroquia": "MACHALILLA",
        "poblacion": "MACHALILLA",
        "z": 0.5
      },
      {
        "id": 331,
        "provincia": "MANABI",
        "canton": "JIPIJAPA",
        "parroquia": "PUERTO DE CAYO",
        "poblacion": "PUERTO DE CAYO",
        "z": 0.5
      },
      {
        "id": 332,
        "provincia": "MANABI",
        "canton": "PUERTO LOPEZ",
        "parroquia": "SALANGO",
        "poblacion": "PUERTO RICO",
        "z": 0.5
      },
      {
        "id": 333,
        "provincia": "MORONA SANTIAGO",
        "canton": "PALORA",
        "parroquia": "PALORA (METZERA)",
        "poblacion": "PALORA",
        "z": 0.3
      },
      {
        "id": 334,
        "provincia": "MORONA SANTIAGO",
        "canton": "PABLO SEXTO",
        "parroquia": "PABLO SEXTO",
        "poblacion": "PABLO SEXTO",
        "z": 0.3
      },
      {
        "id": 335,
        "provincia": "MORONA SANTIAGO",
        "canton": "LIMON INDANZA",
        "parroquia": "GRAL. LEONIDAS PLAZA GUTIERREZ",
        "poblacion": "GENERAL LEONIDAS PLAZA GUTIERREZ",
        "z": 0.3
      },
      {
        "id": 336,
        "provincia": "MORONA SANTIAGO",
        "canton": "SANTIAGO",
        "parroquia": "SANTIAGO DE MENDEZ",
        "poblacion": "SANTIAGO DE MENDEZ",
        "z": 0.3
      },
      {
        "id": 337,
        "provincia": "MORONA SANTIAGO",
        "canton": "SUCUA",
        "parroquia": "SUCUA",
        "poblacion": "SUC�A",
        "z": 0.3
      },
      {
        "id": 338,
        "provincia": "MORONA SANTIAGO",
        "canton": "MORONA",
        "parroquia": "MACAS",
        "poblacion": "MACAS",
        "z": 0.3
      },
      {
        "id": 339,
        "provincia": "NAPO",
        "canton": "QUIJOS",
        "parroquia": "CUYUJA",
        "poblacion": "CUYUJA",
        "z": 0.4
      },
      {
        "id": 340,
        "provincia": "NAPO",
        "canton": "QUIJOS",
        "parroquia": "SAN FRANCISCO DE BORJA",
        "poblacion": "SAN FRANCISCO DE BORJA",
        "z": 0.4
      },
      {
        "id": 341,
        "provincia": "NAPO",
        "canton": "EL CHACO",
        "parroquia": "EL CHACO",
        "poblacion": "EL CHACO",
        "z": 0.4
      },
      {
        "id": 342,
        "provincia": "NAPO",
        "canton": "QUIJOS",
        "parroquia": "BAEZA",
        "poblacion": "BAEZA",
        "z": 0.4
      },
      {
        "id": 343,
        "provincia": "NAPO",
        "canton": "QUIJOS",
        "parroquia": "PAPALLACTA",
        "poblacion": "PAPALLACTA",
        "z": 0.4
      },
      {
        "id": 344,
        "provincia": "NAPO",
        "canton": "ARCHIDONA",
        "parroquia": "ARCHIDONA",
        "poblacion": "ARCHIDONA",
        "z": 0.35
      },
      {
        "id": 345,
        "provincia": "NAPO",
        "canton": "ARCHIDONA",
        "parroquia": "COTUNDO",
        "poblacion": "COTUNDO",
        "z": 0.35
      },
      {
        "id": 346,
        "provincia": "NAPO",
        "canton": "TENA",
        "parroquia": "TENA",
        "poblacion": "TENA",
        "z": 0.35
      },
      {
        "id": 347,
        "provincia": "ORELLANA",
        "canton": "LA JOYA DE LOS SACHAS",
        "parroquia": "LA JOYA DE LOS SACHAS",
        "poblacion": "LA JOYA DE LOS SACHAS",
        "z": 0.15
      },
      {
        "id": 348,
        "provincia": "ORELLANA",
        "canton": "ORELLANA",
        "parroquia": "TARACOA",
        "poblacion": "TARACOA",
        "z": 0.15
      },
      {
        "id": 349,
        "provincia": "ORELLANA",
        "canton": "AGUARICO",
        "parroquia": "NUEVO ROCAFUERTE",
        "poblacion": "NUEVO ROCAFUERTE",
        "z": 0.15
      },
      {
        "id": 350,
        "provincia": "ORELLANA",
        "canton": "AGUARICO",
        "parroquia": "TIPUTINI",
        "poblacion": "TIPUTINI",
        "z": 0.15
      },
      {
        "id": 351,
        "provincia": "ORELLANA",
        "canton": "ORELLANA",
        "parroquia": "PUERTO FRANCISCO DE ORELLANA",
        "poblacion": "PAYAMINO",
        "z": 0.25
      },
      {
        "id": 352,
        "provincia": "ORELLANA",
        "canton": "LA JOYA DE LOS SACHAS",
        "parroquia": "SAN SEBASTIAN DEL COCA",
        "poblacion": "SAN SEBASTIAN DEL COCA",
        "z": 0.25
      },
      {
        "id": 353,
        "provincia": "ORELLANA",
        "canton": "ORELLANA",
        "parroquia": "PUERTO FRANCISCO DE ORELLANA",
        "poblacion": "PUERTO FRANCISCO DE ORELLANA",
        "z": 0.25
      },
      {
        "id": 354,
        "provincia": "PASTAZA",
        "canton": "MERA",
        "parroquia": "SHELL",
        "poblacion": "SHELL",
        "z": 0.3
      },
      {
        "id": 355,
        "provincia": "PASTAZA",
        "canton": "PASTAZA",
        "parroquia": "PUYO",
        "poblacion": "PUYO",
        "z": 0.3
      },
      {
        "id": 356,
        "provincia": "PASTAZA",
        "canton": "MERA",
        "parroquia": "MERA",
        "poblacion": "MERA",
        "z": 0.35
      },
      {
        "id": 357,
        "provincia": "PICHINCHA",
        "canton": "PUERTO QUITO",
        "parroquia": "PUERTO QUITO",
        "poblacion": "SIM�N BOLIVAR",
        "z": 0.5
      },
      {
        "id": 358,
        "provincia": "PICHINCHA",
        "canton": "PUERTO QUITO",
        "parroquia": "PUERTO QUITO",
        "poblacion": "BUENOS AIRES",
        "z": 0.5
      },
      {
        "id": 359,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "EL QUINCHE",
        "poblacion": "EL QUINCHE",
        "z": 0.4
      },
      {
        "id": 360,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "SAN ANTONIO",
        "poblacion": "SAN ANTONIO DE PICHINCHA",
        "z": 0.4
      },
      {
        "id": 361,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "CUMBAYA",
        "poblacion": "CUMBAYA",
        "z": 0.4
      },
      {
        "id": 362,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "GUANGOPOLO",
        "poblacion": "ARMENIA",
        "z": 0.4
      },
      {
        "id": 363,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "AMAGUA�A",
        "poblacion": "UYUMBICHO",
        "z": 0.4
      },
      {
        "id": 364,
        "provincia": "PICHINCHA",
        "canton": "MEJIA",
        "parroquia": "ALOAG",
        "poblacion": "ALOAG",
        "z": 0.4
      },
      {
        "id": 365,
        "provincia": "PICHINCHA",
        "canton": "CAYAMBE",
        "parroquia": "CANGAHUA",
        "poblacion": "CANGAGHUA",
        "z": 0.4
      },
      {
        "id": 366,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "GUAYLLABAMBA",
        "poblacion": "GUAYLLABAMBA",
        "z": 0.4
      },
      {
        "id": 367,
        "provincia": "PICHINCHA",
        "canton": "CAYAMBE",
        "parroquia": "ASCAZUBI",
        "poblacion": "ASCAZUBI",
        "z": 0.4
      },
      {
        "id": 368,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "POMASQUI",
        "poblacion": "POMASQUI",
        "z": 0.4
      },
      {
        "id": 369,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "CALDERON (CARAPUNGO)",
        "poblacion": "CALDERON",
        "z": 0.4
      },
      {
        "id": 370,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "NAYON",
        "poblacion": "NAYON",
        "z": 0.4
      },
      {
        "id": 371,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "ZAMBIZA",
        "poblacion": "ZAMBIZA",
        "z": 0.4
      },
      {
        "id": 372,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "YARUQUI",
        "poblacion": "YARUQUI",
        "z": 0.4
      },
      {
        "id": 373,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "CHECA (CHILPA)",
        "poblacion": "CHECA",
        "z": 0.4
      },
      {
        "id": 374,
        "provincia": "PICHINCHA",
        "canton": "MEJIA",
        "parroquia": "MACHACHI",
        "poblacion": "ALOAG",
        "z": 0.4
      },
      {
        "id": 375,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "AMAGUA�A",
        "poblacion": "AMAGUA�A",
        "z": 0.4
      },
      {
        "id": 376,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "PINTAG",
        "poblacion": "PINTAG",
        "z": 0.4
      },
      {
        "id": 377,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "LA MERCED",
        "poblacion": "LA MERCED",
        "z": 0.4
      },
      {
        "id": 378,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "PUEMBO",
        "poblacion": "PUEMBO",
        "z": 0.4
      },
      {
        "id": 379,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "TABABELA",
        "poblacion": "TABABELA",
        "z": 0.4
      },
      {
        "id": 380,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "CALDERON (CARAPUNGO)",
        "poblacion": "LLANO GRANDE",
        "z": 0.4
      },
      {
        "id": 381,
        "provincia": "PICHINCHA",
        "canton": "MEJIA",
        "parroquia": "MACHACHI",
        "poblacion": "MACHACHI",
        "z": 0.4
      },
      {
        "id": 382,
        "provincia": "PICHINCHA",
        "canton": "PEDRO MONCAYO",
        "parroquia": "TABACUNDO",
        "poblacion": "ANGUMBA",
        "z": 0.4
      },
      {
        "id": 383,
        "provincia": "PICHINCHA",
        "canton": "CAYAMBE",
        "parroquia": "CAYAMBE",
        "poblacion": "HUAYCUPATA",
        "z": 0.4
      },
      {
        "id": 384,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "NANEGAL",
        "poblacion": "NANEGAL",
        "z": 0.4
      },
      {
        "id": 385,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "GUALEA",
        "poblacion": "GUALEA",
        "z": 0.4
      },
      {
        "id": 386,
        "provincia": "PICHINCHA",
        "canton": "PEDRO MONCAYO",
        "parroquia": "TUPIGACHI",
        "poblacion": "TUPIGACHI",
        "z": 0.4
      },
      {
        "id": 387,
        "provincia": "PICHINCHA",
        "canton": "CAYAMBE",
        "parroquia": "CAYAMBE",
        "poblacion": "CAYAMBE",
        "z": 0.4
      },
      {
        "id": 388,
        "provincia": "PICHINCHA",
        "canton": "CAYAMBE",
        "parroquia": "CAYAMBE",
        "poblacion": "JUAN MONTALVO",
        "z": 0.4
      },
      {
        "id": 389,
        "provincia": "PICHINCHA",
        "canton": "PEDRO MONCAYO",
        "parroquia": "TABACUNDO",
        "poblacion": "TABACUNDO",
        "z": 0.4
      },
      {
        "id": 390,
        "provincia": "PICHINCHA",
        "canton": "PEDRO MONCAYO",
        "parroquia": "LA ESPERANZA",
        "poblacion": "LA ESPERANZA",
        "z": 0.4
      },
      {
        "id": 391,
        "provincia": "PICHINCHA",
        "canton": "PEDRO MONCAYO",
        "parroquia": "LA ESPERANZA",
        "poblacion": "GUARAQUI",
        "z": 0.4
      },
      {
        "id": 392,
        "provincia": "PICHINCHA",
        "canton": "PEDRO MONCAYO",
        "parroquia": "TOCACHI",
        "poblacion": "TOCACHI",
        "z": 0.4
      },
      {
        "id": 393,
        "provincia": "PICHINCHA",
        "canton": "PEDRO MONCAYO",
        "parroquia": "MALCHINGUI",
        "poblacion": "MALCHINGUI",
        "z": 0.4
      },
      {
        "id": 394,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "PERUCHO",
        "poblacion": "PERUCHO",
        "z": 0.4
      },
      {
        "id": 395,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "PUELLARO",
        "poblacion": "PUELLARO",
        "z": 0.4
      },
      {
        "id": 396,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "PUELLARO",
        "poblacion": "ALCHIPICHI",
        "z": 0.4
      },
      {
        "id": 397,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "CALACALI",
        "poblacion": "PULULAHUA",
        "z": 0.4
      },
      {
        "id": 398,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "SAN ANTONIO",
        "poblacion": "CASPIGASI DEL CARMEN",
        "z": 0.4
      },
      {
        "id": 399,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "CALACALI",
        "poblacion": "CALACALI",
        "z": 0.4
      },
      {
        "id": 400,
        "provincia": "PICHINCHA",
        "canton": "CAYAMBE",
        "parroquia": "OLMEDO (PECILLO)",
        "poblacion": "OLMEDO",
        "z": 0.4
      },
      {
        "id": 401,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "ATAHUALPA (HABASPAMBA)",
        "poblacion": "ATAHUALPA",
        "z": 0.4
      },
      {
        "id": 402,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "SAN JOSE DE MINAS",
        "poblacion": "SAN JOSE DE MINAS",
        "z": 0.4
      },
      {
        "id": 403,
        "provincia": "PICHINCHA",
        "canton": "SAN MIGUEL DE LOS BANCOS",
        "parroquia": "SAN MIGUEL DE LOS BANCOS",
        "poblacion": "SAN MIGUEL DE LOS BANCOS",
        "z": 0.4
      },
      {
        "id": 404,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "NANEGALITO",
        "poblacion": "NANEGALITO",
        "z": 0.4
      },
      {
        "id": 405,
        "provincia": "PICHINCHA",
        "canton": "CAYAMBE",
        "parroquia": "CAYAMBE",
        "poblacion": "AYORA",
        "z": 0.4
      },
      {
        "id": 406,
        "provincia": "PICHINCHA",
        "canton": "RUMI�AHUI",
        "parroquia": "SANGOLQUI",
        "poblacion": "SANGOLQUI",
        "z": 0.4
      },
      {
        "id": 407,
        "provincia": "PICHINCHA",
        "canton": "PUERTO QUITO",
        "parroquia": "PUERTO QUITO",
        "poblacion": "PUERTO QUITO",
        "z": 0.4
      },
      {
        "id": 408,
        "provincia": "PICHINCHA",
        "canton": "PEDRO VICENTE MALDONADO",
        "parroquia": "PEDRO VICENTE MALDONADO",
        "poblacion": "PEDRO VICENTE MALDONADO",
        "z": 0.4
      },
      {
        "id": 409,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "TUMBACO",
        "poblacion": "TUMBACO",
        "z": 0.4
      },
      {
        "id": 410,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "PIFO",
        "poblacion": "PIFO",
        "z": 0.4
      },
      {
        "id": 411,
        "provincia": "PICHINCHA",
        "canton": "MEJIA",
        "parroquia": "TAMBILLO",
        "poblacion": "TAMBILLO",
        "z": 0.4
      },
      {
        "id": 412,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "CONOCOTO",
        "poblacion": "SANTA ROSA",
        "z": 0.4
      },
      {
        "id": 413,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "AMAGUA�A",
        "poblacion": "SAN RAFAEL",
        "z": 0.4
      },
      {
        "id": 414,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "CONOCOTO",
        "poblacion": "CONOCOTO",
        "z": 0.4
      },
      {
        "id": 415,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "POMASQUI",
        "poblacion": "QUITO",
        "z": 0.4
      },
      {
        "id": 416,
        "provincia": "PICHINCHA",
        "canton": "QUITO",
        "parroquia": "ALANGASI",
        "poblacion": "ALANGASI",
        "z": 0.4
      },
      {
        "id": 417,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "SANTA ELENA",
        "poblacion": "SAN PABLO",
        "z": 0.5
      },
      {
        "id": 418,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "ATAHUALPA",
        "poblacion": "ATAHUALPA",
        "z": 0.5
      },
      {
        "id": 419,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "SANTA ELENA",
        "poblacion": "SANTA ELENA",
        "z": 0.5
      },
      {
        "id": 420,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "SAN JOSE",
        "z": 0.5
      },
      {
        "id": 421,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "SAN JOSE",
        "z": 0.5
      },
      {
        "id": 422,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "LA CURIA",
        "z": 0.5
      },
      {
        "id": 423,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "OLON",
        "z": 0.5
      },
      {
        "id": 424,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "MONTA�ITA",
        "z": 0.5
      },
      {
        "id": 425,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "EL MAMEY",
        "z": 0.5
      },
      {
        "id": 426,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "COLONCHE",
        "poblacion": "FEBRES CORDERO",
        "z": 0.5
      },
      {
        "id": 427,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "COLONCHE",
        "poblacion": "BAMBIL CALLAO",
        "z": 0.5
      },
      {
        "id": 428,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "COLONCHE",
        "poblacion": "BARCELONA",
        "z": 0.5
      },
      {
        "id": 429,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "SAN PEDRO DE VALDIVIA",
        "z": 0.5
      },
      {
        "id": 430,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "COLONCHE",
        "poblacion": "AYANGUE",
        "z": 0.5
      },
      {
        "id": 431,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "SINCAL",
        "z": 0.5
      },
      {
        "id": 432,
        "provincia": "SANTA ELENA",
        "canton": "SANTA ELENA",
        "parroquia": "MANGLARALTO",
        "poblacion": "MANGLARALTO",
        "z": 0.5
      },
      {
        "id": 433,
        "provincia": "SANTA ELENA",
        "canton": "SALINAS",
        "parroquia": "SALINAS",
        "poblacion": "LA LIBERTAD",
        "z": 0.5
      },
      {
        "id": 434,
        "provincia": "SANTA ELENA",
        "canton": "SALINAS",
        "parroquia": "SALINAS",
        "poblacion": "SALINAS",
        "z": 0.5
      },
      {
        "id": 435,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "SANTA MARIA DEL TOACHI",
        "poblacion": "SANTA MAR�A DEL TOACHI",
        "z": 0.35
      },
      {
        "id": 436,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "LUZ DE AMERICA",
        "poblacion": "LUZ DE AM�RICA",
        "z": 0.4
      },
      {
        "id": 437,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "PUERTO LIMON",
        "poblacion": "PUERTO LIM�N",
        "z": 0.4
      },
      {
        "id": 438,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "EL ESFUERZO",
        "poblacion": "EL ESFUERZO",
        "z": 0.4
      },
      {
        "id": 439,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "SAN JACINTO DEL BUA",
        "poblacion": "SAN JACINTO DE BUA",
        "z": 0.4
      },
      {
        "id": 440,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "VALLE HERMOSO",
        "poblacion": "VALLE HERMOSO",
        "z": 0.4
      },
      {
        "id": 441,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "VALLE HERMOSO",
        "poblacion": "CRIST�BAL COL�N",
        "z": 0.4
      },
      {
        "id": 442,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "STO. DOMINGO DE LOS COLORADOS",
        "poblacion": "NUEVO ISRAEL",
        "z": 0.4
      },
      {
        "id": 443,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "STO. DOMINGO DE LOS COLORADOS",
        "poblacion": "LAS DELICIAS",
        "z": 0.4
      },
      {
        "id": 444,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "STO. DOMINGO DE LOS COLORADOS",
        "poblacion": "LA AURORA",
        "z": 0.4
      },
      {
        "id": 445,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "STO. DOMINGO DE LOS COLORADOS",
        "poblacion": "JULIO MORENO",
        "z": 0.4
      },
      {
        "id": 446,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "STO. DOMINGO DE LOS COLORADOS",
        "poblacion": "UNI�N C�VICA POPULAR",
        "z": 0.4
      },
      {
        "id": 447,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "STO. DOMINGO DE LOS COLORADOS",
        "poblacion": "SUSANITA",
        "z": 0.4
      },
      {
        "id": 448,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "STO. DOMINGO DE LOS COLORADOS",
        "poblacion": "EULOGIO",
        "z": 0.4
      },
      {
        "id": 449,
        "provincia": "STO. DOMINGO DE LOS TSACHILAS",
        "canton": "SANTO DOMINGO",
        "parroquia": "STO. DOMINGO DE LOS COLORADOS",
        "poblacion": "SANTO DOMINGO DE LOS COLORADOS",
        "z": 0.4
      },
      {
        "id": 450,
        "provincia": "SUCUMBIOS",
        "canton": "SHUSHUFINDI",
        "parroquia": "SHUSHUFINDI",
        "poblacion": "SHUSHUFINDI",
        "z": 0.15
      },
      {
        "id": 451,
        "provincia": "SUCUMBIOS",
        "canton": "SHUSHUFINDI",
        "parroquia": "SIETE DE JULIO",
        "poblacion": "SIETE DE JULIO",
        "z": 0.15
      },
      {
        "id": 452,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "EL ENO",
        "poblacion": "EL ENO",
        "z": 0.15
      },
      {
        "id": 453,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "PACAYACU",
        "poblacion": "AGUARICO",
        "z": 0.15
      },
      {
        "id": 454,
        "provincia": "SUCUMBIOS",
        "canton": "CUYABENO",
        "parroquia": "TARAPOA",
        "poblacion": "CHIRITZA",
        "z": 0.15
      },
      {
        "id": 455,
        "provincia": "SUCUMBIOS",
        "canton": "SHUSHUFINDI",
        "parroquia": "SAN PEDRO DE LOS COFANES",
        "poblacion": "SAN PEDRO DE LOS COFANES",
        "z": 0.15
      },
      {
        "id": 456,
        "provincia": "SUCUMBIOS",
        "canton": "SHUSHUFINDI",
        "parroquia": "SAN PEDRO DE LOS COFANES",
        "poblacion": "JIVINO",
        "z": 0.15
      },
      {
        "id": 457,
        "provincia": "SUCUMBIOS",
        "canton": "PUTUMAYO",
        "parroquia": "PUERTO EL CARMEN DEL PUTUMAYO",
        "poblacion": "PUERTO EL CARMEN DEL PUTUMAYO",
        "z": 0.15
      },
      {
        "id": 458,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "NUEVA LOJA",
        "poblacion": "PUERTO AGUARICO",
        "z": 0.15
      },
      {
        "id": 459,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "SANTA CECILIA",
        "poblacion": "SANTA CECILIA",
        "z": 0.15
      },
      {
        "id": 460,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "GENERAL FARFAN",
        "poblacion": "GENERAL FARFAN",
        "z": 0.15
      },
      {
        "id": 461,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "GENERAL FARFAN",
        "poblacion": "SAN MIGUEL",
        "z": 0.15
      },
      {
        "id": 462,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "NUEVA LOJA",
        "poblacion": "NUEVA LOJA",
        "z": 0.15
      },
      {
        "id": 463,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "NUEVA LOJA",
        "poblacion": "SANTA ROSA",
        "z": 0.15
      },
      {
        "id": 464,
        "provincia": "SUCUMBIOS",
        "canton": "LAGO AGRIO",
        "parroquia": "JAMBELI",
        "poblacion": "JAMBELI",
        "z": 0.25
      },
      {
        "id": 465,
        "provincia": "SUCUMBIOS",
        "canton": "CASCALES",
        "parroquia": "SEVILLA",
        "poblacion": "SEVILLA",
        "z": 0.25
      },
      {
        "id": 466,
        "provincia": "SUCUMBIOS",
        "canton": "CASCALES",
        "parroquia": "EL DORADO DE CASCALES",
        "poblacion": "EL DORADO DE CASCALES",
        "z": 0.3
      },
      {
        "id": 467,
        "provincia": "SUCUMBIOS",
        "canton": "GONZALO PIZARRO",
        "parroquia": "LUMBAQUI",
        "poblacion": "EL DORADO DE CASCALES",
        "z": 0.3
      },
      {
        "id": 468,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "PILAGUIN (PILAHUIN)",
        "poblacion": "COMUNA TAMBO LOMA",
        "z": 0.35
      },
      {
        "id": 469,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "IZAMBA",
        "poblacion": "CORAZON DE JESUS",
        "z": 0.4
      },
      {
        "id": 470,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "IZAMBA",
        "poblacion": "URBANIZACION AEROPUERTO",
        "z": 0.4
      },
      {
        "id": 471,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "PILAGUIN (PILAHUIN)",
        "poblacion": "PILAHUIN",
        "z": 0.4
      },
      {
        "id": 472,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "QUISAPINCHA (QUIZAPINCHA)",
        "poblacion": "QUINSAPINCHA",
        "z": 0.4
      },
      {
        "id": 473,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "JUAN BENIGNO VELA",
        "poblacion": "JUAN BENIGNO VELA",
        "z": 0.4
      },
      {
        "id": 474,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "AUGUSTO N. MARTINEZ",
        "poblacion": "MARTINEZ",
        "z": 0.4
      },
      {
        "id": 475,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "PICAIGUA",
        "poblacion": "SAN ISIDRO",
        "z": 0.4
      },
      {
        "id": 476,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "TOTORAS",
        "poblacion": "TOTORAS",
        "z": 0.4
      },
      {
        "id": 477,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "AMBATILLO",
        "poblacion": "AMBATILLO",
        "z": 0.4
      },
      {
        "id": 478,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "ATAHUALPA (CHISALATA)",
        "poblacion": "ATAHUALPA",
        "z": 0.4
      },
      {
        "id": 479,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "IZAMBA",
        "poblacion": "IZAMBA",
        "z": 0.4
      },
      {
        "id": 480,
        "provincia": "TUNGURAHUA",
        "canton": "SANTIAGO DE PILLARO",
        "parroquia": "SAN MIGUELITO",
        "poblacion": "SAN MIGUELITO",
        "z": 0.4
      },
      {
        "id": 481,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "HUACHI GRANDE",
        "poblacion": "HUACHI GRANDE",
        "z": 0.4
      },
      {
        "id": 482,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "SANTA ROSA",
        "poblacion": "SANTA ROSA",
        "z": 0.4
      },
      {
        "id": 483,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "AMBATO",
        "poblacion": "AMBATO",
        "z": 0.4
      },
      {
        "id": 484,
        "provincia": "TUNGURAHUA",
        "canton": "SAN PEDRO DE PELILEO",
        "parroquia": "PELILEO",
        "poblacion": "PELILEO GRANDE",
        "z": 0.4
      },
      {
        "id": 485,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "PASA",
        "poblacion": "SAN ANTONIO DE PASA",
        "z": 0.4
      },
      {
        "id": 486,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "SAN BARTOLOME DE PINLLOG",
        "poblacion": "SAN BARTOLOME DE PINLLOG",
        "z": 0.4
      },
      {
        "id": 487,
        "provincia": "TUNGURAHUA",
        "canton": "PATATE",
        "parroquia": "PATATE",
        "poblacion": "PATATE",
        "z": 0.4
      },
      {
        "id": 488,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "SAN FERNANDO",
        "poblacion": "SAN FERNANDO",
        "z": 0.4
      },
      {
        "id": 489,
        "provincia": "TUNGURAHUA",
        "canton": "SANTIAGO DE PILLARO",
        "parroquia": "EMILIO MARIA TERAN (RUMIPAMBA)",
        "poblacion": "EMILIO M. TERAN",
        "z": 0.4
      },
      {
        "id": 490,
        "provincia": "TUNGURAHUA",
        "canton": "SANTIAGO DE PILLARO",
        "parroquia": "MARCOS ESPINEL (CHACATA)",
        "poblacion": "MARCOS ESPINEL",
        "z": 0.4
      },
      {
        "id": 491,
        "provincia": "TUNGURAHUA",
        "canton": "BA�OS DE AGUA SANTA",
        "parroquia": "BA�OS DE AGUA SANTA",
        "poblacion": "BA�OS DE AGUA SANTA",
        "z": 0.4
      },
      {
        "id": 492,
        "provincia": "TUNGURAHUA",
        "canton": "BA�OS DE AGUA SANTA",
        "parroquia": "ULBA",
        "poblacion": "ULBA",
        "z": 0.4
      },
      {
        "id": 493,
        "provincia": "TUNGURAHUA",
        "canton": "BA�OS DE AGUA SANTA",
        "parroquia": "RIO VERDE",
        "poblacion": "RIO VERDE",
        "z": 0.4
      },
      {
        "id": 494,
        "provincia": "TUNGURAHUA",
        "canton": "SAN PEDRO DE PELILEO",
        "parroquia": "GUAMBALO (HUAMBALO)",
        "poblacion": "GUAMBAL�",
        "z": 0.4
      },
      {
        "id": 495,
        "provincia": "TUNGURAHUA",
        "canton": "TISALEO",
        "parroquia": "TISALEO",
        "poblacion": "TISALEO",
        "z": 0.4
      },
      {
        "id": 496,
        "provincia": "TUNGURAHUA",
        "canton": "CEVALLOS",
        "parroquia": "CEVALLOS",
        "poblacion": "CEVALLOS",
        "z": 0.4
      },
      {
        "id": 497,
        "provincia": "TUNGURAHUA",
        "canton": "QUERO",
        "parroquia": "QUERO",
        "poblacion": "QUERO",
        "z": 0.4
      },
      {
        "id": 498,
        "provincia": "TUNGURAHUA",
        "canton": "QUERO",
        "parroquia": "RUMIPAMBA",
        "poblacion": "RUMIPAMBA",
        "z": 0.4
      },
      {
        "id": 499,
        "provincia": "TUNGURAHUA",
        "canton": "SAN PEDRO DE PELILEO",
        "parroquia": "COTALO",
        "poblacion": "COTAL�",
        "z": 0.4
      },
      {
        "id": 500,
        "provincia": "TUNGURAHUA",
        "canton": "SANTIAGO DE PILLARO",
        "parroquia": "SAN ANDRES",
        "poblacion": "SAN ANDR�S",
        "z": 0.4
      },
      {
        "id": 501,
        "provincia": "TUNGURAHUA",
        "canton": "AMBATO",
        "parroquia": "CUNCHIBAMBA",
        "poblacion": "CUNCHIBAMBA",
        "z": 0.4
      },
      {
        "id": 502,
        "provincia": "TUNGURAHUA",
        "canton": "SANTIAGO DE PILLARO",
        "parroquia": "SAN JOSE DE POALO",
        "poblacion": "SAN JOS� DE POAL�",
        "z": 0.4
      },
      {
        "id": 503,
        "provincia": "TUNGURAHUA",
        "canton": "PATATE",
        "parroquia": "EL TRIUNFO",
        "poblacion": "EL TRIUNFO",
        "z": 0.4
      },
      {
        "id": 504,
        "provincia": "TUNGURAHUA",
        "canton": "PATATE",
        "parroquia": "LOS ANDES (CAB EN POATUG)",
        "poblacion": "SUCRE",
        "z": 0.4
      },
      {
        "id": 505,
        "provincia": "TUNGURAHUA",
        "canton": "MOCHA",
        "parroquia": "MOCHA",
        "poblacion": "MOCHA",
        "z": 0.4
      },
      {
        "id": 506,
        "provincia": "TUNGURAHUA",
        "canton": "SAN PEDRO DE PELILEO",
        "parroquia": "PELILEO",
        "poblacion": "PELILEO",
        "z": 0.4
      },
      {
        "id": 507,
        "provincia": "TUNGURAHUA",
        "canton": "SANTIAGO DE PILLARO",
        "parroquia": "PILLARO",
        "poblacion": "PILLARO",
        "z": 0.4
      },
      {
        "id": 508,
        "provincia": "ZAMORA CHINCHIPE",
        "canton": "NANGARITZA",
        "parroquia": "GUAYZIMI",
        "poblacion": "GUAYZIMI",
        "z": 0.3
      },
      {
        "id": 509,
        "provincia": "ZAMORA CHINCHIPE",
        "canton": "YANTZAZA",
        "parroquia": "YANTZAZA (YANZATZA)",
        "poblacion": "YANTZAZA",
        "z": 0.3
      },
      {
        "id": 510,
        "provincia": "ZAMORA CHINCHIPE",
        "canton": "CHINCHIPE",
        "parroquia": "ZUMBA",
        "poblacion": "ZUMBA",
        "z": 0.25
      },
      {
        "id": 511,
        "provincia": "ZAMORA CHINCHIPE",
        "canton": "ZAMORA",
        "parroquia": "ZAMORA",
        "poblacion": "ZAMORA",
        "z": 0.25
      },
      {
        "id": 512,
        "provincia": "ZAMORA CHINCHIPE",
        "canton": "ZAMORA",
        "parroquia": "ZAMORA",
        "poblacion": "ZAMORA",
        "z": 0.25
      },
      {
        "id": 513,
        "provincia": "ZONA NO DELIMITADA",
        "canton": "LAS GOLONDRINAS",
        "parroquia": "LAS GOLONDRINAS",
        "poblacion": "LAS GOLONDRINAS",
        "z": 0.5
      },
      {
        "id": 514,
        "provincia": "ZONA NO DELIMITADA",
        "canton": "MANGA DEL CURA",
        "parroquia": "MANGA DEL CURA",
        "poblacion": "SANTA MAR�A",
        "z": 0.4
      },
      {
        "id": 515,
        "provincia": "ZONA NO DELIMITADA",
        "canton": "MANGA DEL CURA",
        "parroquia": "MANGA DEL CURA",
        "poblacion": "SANTA TERESA",
        "z": 0.4
      }
    ]
  }

  filterItems(searchTerm) {

    return this.items.filter((item) => {
      return item.poblacion.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  public aux = {
    "provincias": [
      {
        "name": "AZUAY",
        "id": 0,
        "cantones": [
          {
            "name": "CUENCA",
            "parroquias": [
              {
                "name": "CUENCA",
                "poblacion": [
                  {
                    "name": "CUENCA",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "CHORDELEG",
            "parroquias": [
              {
                "name": "CHORDELEG",
                "poblacion": [
                  {
                    "name": "CHORDELEG",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "GUALACEO",
            "parroquias": [
              {
                "name": "GUALACEO",
                "poblacion": [
                  {
                    "name": "GUALACEO",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "SEVILLA DE ORO",
            "parroquias": [
              {
                "name": "SEVILLA DE ORO",
                "poblacion": [
                  {
                    "name": "SEVILLA DE ORO",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "EL PAN",
            "parroquias": [
              {
                "name": "EL PAN",
                "poblacion": [
                  {
                    "name": "EL PAN",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "PAUTE",
            "parroquias": [
              {
                "name": "CHICAN (GUILLERMO ORTEGA)",
                "poblacion": [
                  {
                    "name": "PAUTE",
                    "z": 0.25
                  }
                ]
              }
            ]
          }
        ]

      },

      {
        "name": "BOLIVAR",
        "id": 1,
        "cantones": [
          {
            "name": "GUARANDA",
            "parroquias": [
              {
                "name": "GUARANDA",
                "poblacion": [
                  {
                    "name": "GUARANDA",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "SAN LORENZO",
                "poblacion": [
                  {
                    "name": "SAN LORENZO",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "SAN SIMON (YACOTO)",
                "poblacion": [
                  {
                    "name": "SAN SIMON",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "SIMIATUG",
                "poblacion": [
                  {
                    "name": "SIMIATUG",
                    "z": 0.3
                  }
                ]
              },
              {
                "name": "SAN LUIS DE PAMBIL",
                "poblacion": [
                  {
                    "name": "SAN LUIS DE PAMBIL",
                    "z": 0.3
                  },
                  {
                    "name": "SAN LUIS DE LAS MERCEDES",
                    "z": 0.3
                  }
                ]
              },
              {
                "name": "FACUNDO VELA",
                "poblacion": [
                  {
                    "name": "FACUNDO VELA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "SAN MIGUEL",
            "parroquias": [
              {
                "name": "SAN MIGUEL",
                "poblacion": [
                  {
                    "name": "SAN MIGUEL DE BOLIVAR",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "SANTIAGO",
                "poblacion": [
                  {
                    "name": "SANTIAGO",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "CHILLANES",
            "parroquias": [
              {
                "name": "SAN JOSE DEL TAMBO",
                "poblacion": [
                  {
                    "name": "SAN JOSE DEL TAMBO",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "CHILLANES",
                "poblacion": [
                  {
                    "name": "CHILLANES",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "CHIMBO",
            "parroquias": [
              {
                "name": "SAN JOSE DE CHIMBO",
                "poblacion": [
                  {
                    "name": "SAN JOSE DE CHIMBO",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "LAS NAVES",
            "parroquias": [
              {
                "name": "LAS NAVES",
                "poblacion": [
                  {
                    "name": "LAS NAVES",
                    "z": 0.3
                  },
                  {
                    "name": "LAS MERCEDES",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "ECHEANDIA",
            "parroquias": [
              {
                "name": "ECHEANDIA",
                "poblacion": [
                  {
                    "name": "ECHEANDIA",
                    "z": 0.3
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "CAÑAR",
        "id": 2,
        "cantones": [
          {
            "name": "CAÑAR",
            "parroquias": [
              {
                "name": "CAÑAR",
                "poblacion": [
                  {
                    "name": "CAÑAR",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "EL TAMBO",
            "parroquias": [
              {
                "name": "EL TAMBO",
                "poblacion": [
                  {
                    "name": "EL TAMBO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "LA TRONCAL",
            "parroquias": [
              {
                "name": "LA TRONCAL",
                "poblacion": [
                  {
                    "name": "LA TRONCAL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PANCHO NEGRO",
                "poblacion": [
                  {
                    "name": "LA PUNTILLA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "DELEG",
            "parroquias": [
              {
                "name": "DELEG",
                "poblacion": [
                  {
                    "name": "DELEG",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "AZOGUES",
            "parroquias": [
              {
                "name": "AZOGUES",
                "poblacion": [
                  {
                    "name": "AZOGUES",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "BIBLIAN",
            "parroquias": [
              {
                "name": "BIBLIAN",
                "poblacion": [
                  {
                    "name": "BIBLIAN",
                    "z": 0.25
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "CARCHI",
        "id": 3,
        "cantones": [
          {
            "name": "SAN PEDRO DE HUACA",
            "parroquias": [
              {
                "name": "HUACA",
                "poblacion": [
                  {
                    "name": "HUACA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MARISCAL SUCRE",
                "poblacion": [
                  {
                    "name": "MARISCAL SUCRE",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "TULCAN",
            "parroquias": [
              {
                "name": "EL CARMELO (EL PUN)",
                "poblacion": [
                  {
                    "name": "EL PLAYON DE SAN FRANCISCO",
                    "z": 0.4
                  },
                  {
                    "name": "EL CARMELO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TULCAN",
                "poblacion": [
                  {
                    "name": "TULCAN",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "JULIO ANDRADE (OREJUELA)",
                "poblacion": [
                  {
                    "name": "JULIO ANDRADE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SANTA MARTHA DE CUBA",
                "poblacion": [
                  {
                    "name": "SANTA MARTHA DE CUBA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TUFIÑO",
                "poblacion": [
                  {
                    "name": "TUFIÑO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "ESPEJO",
            "parroquias": [
              {
                "name": "EL ANGEL",
                "poblacion": [
                  {
                    "name": "EL ANGEL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LA LIBERTAD (ALIZO)",
                "poblacion": [
                  {
                    "name": "LA LIBERTAD",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN ISIDRO",
                "poblacion": [
                  {
                    "name": "SAN ISIDRO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "MONTUFAR",
            "parroquias": [
              {
                "name": "SAN GABRIEL",
                "poblacion": [
                  {
                    "name": "SAN GABRIEL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LA PAZ",
                "poblacion": [
                  {
                    "name": "LA PAZ",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "FERNANDEZ SALVADOR",
                "poblacion": [
                  {
                    "name": "FERNANDEZ SALVADOR",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "BOLIVAR",
            "id": 4,
            "parroquias": [
              {
                "name": "GARCIA MORENO",
                "poblacion": [
                  {
                    "name": "SAN JOSE DE TINAJILLAS",
                    "z": 0.4
                  },
                  {
                    "name": "GARCIA MORENO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MONTE OLIVO",
                "poblacion": [
                  {
                    "name": "MONTE OLIVO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LOS ANDES",
                "poblacion": [
                  {
                    "name": "PIQUIUCHO",
                    "z": 0.4
                  },
                  {
                    "name": "LOS ANDES",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN RAFAEL",
                "poblacion": [
                  {
                    "name": "PUEBLO NUEVO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN VICENTE DE PUSIR",
                "poblacion": [
                  {
                    "name": "PUSIR",
                    "z": 0.4
                  },
                  {
                    "name": "SAN VICENTE DE PUSIR",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "BOLIVAR",
                "poblacion": [
                  {
                    "name": "BOLIVAR",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "MIRA",
            "parroquias": [
              {
                "name": "MIRA (CHONTAHUASI)",
                "poblacion": [
                  {
                    "name": "MIRA",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "CHIMBORAZO",
        "id": 4,
        "cantones": [
          {
            "name": "COLTA",
            "parroquias": [
              {
                "name": "CAÑI",
                "poblacion": [
                  {
                    "name": "CAPÑ",
                    "Z": 0.35
                  }
                ]
              },
              {
                "name": "JUAN DE VELASCO (PANGOR)",
                "poblacion": [
                  {
                    "name": "JUAN DE VELASCO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "VILLA LA UNION (CAJABAMBA)",
                "poblacion": [
                  {
                    "name": "CAJABAMBA",
                    "z": 0.4
                  },
                  {
                    "name": "VILLA LA UNION",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "COLUMBE",
                "poblacion": [
                  {
                    "name": "COLUMBE",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PALLATANGA",
            "parroquias": [
              {
                "name": "PALLATANGA",
                "poblacion": [
                  {
                    "name": "PALLATANGA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "GUANO",
            "parroquias": [
              {
                "name": "GUANO",
                "poblacion": [
                  {
                    "name": "PUNGAL GRANDE",
                    "z": 0.4
                  },
                  {
                    "name": "GUANO",
                    "z": 0.4
                  },
                  {
                    "name": "RIOBAMBA",
                    "z": 0.4
                  },
                  {
                    "name": "CUBIJIES",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN ANDRES",
                "poblacion": [
                  {
                    "name": "SAN ANDRES",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN ISIDRO DE PATULU",
                "poblacion": [
                  {
                    "name": "SAN ISIDRO DE PATULU",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "VALPARAISO",
                "poblacion": [
                  {
                    "name": "VALPARAISO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN JOSE DEL CHAZO",
                "poblacion": [
                  {
                    "name": "SAN JOSE DE CHAZO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GUANANDO",
                "poblacion": [
                  {
                    "name": "GUANANDO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "ILAPO",
                "poblacion": [
                  {
                    "name": "ILAPO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN GERARDO DE PACAICAGUAN",
                "poblacion": [
                  {
                    "name": "SAN GERARDO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SANTA FE DE GALAN",
                "poblacion": [
                  {
                    "name": "SANTA FE DE GALAN",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PENIPE",
            "parroquias": [
              {
                "name": "PENIPE",
                "poblacion": [
                  {
                    "name": "PENIPE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PUELA",
                "poblacion": [
                  {
                    "name": "PUELA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN ANTONIO DE BAYUSHIG",
                "poblacion": [
                  {
                    "name": "SAN ANTONIO DE BAYUSHIG",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "EL ALTAR",
                "poblacion": [
                  {
                    "name": "MATUS",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "RIOBAMBA",
            "parroquias": [
              {
                "name": "CALPI",
                "poblacion": [
                  {
                    "name": "CALPI",
                    "z": 0.4
                  },
                  {
                    "name": "ASUNCION",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "RIOBAMBA",
                "poblacion": [
                  {
                    "name": "LICAN",
                    "z": 0.4
                  },
                  {
                    "name": "MACAJI",
                    "z": 0.4
                  },
                  {
                    "name": "SAN VICENTE",
                    "z": 0.4
                  },
                  {
                    "name": "YARUQUIES",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "QUIMIAG",
                "poblacion": [
                  {
                    "name": "QUIMIAG",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PUNIN",
                "poblacion": [
                  {
                    "name": "PUNIN",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LICTO",
                "poblacion": [
                  {
                    "name": "LICTO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PUNGALA",
                "poblacion": [
                  {
                    "name": "PUNGALA",
                    "z": 0.4
                  },
                  {
                    "name": "LLACTAPAMBA DE ALAO",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "SAN LUIS",
                "poblacion": [
                  {
                    "name": "SAN LUIS",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN JUAN",
                "poblacion": [
                  {
                    "name": "SAN JUAN",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "CHAMBO",
            "parroquias": [
              {
                "name": "CHAMBO",
                "poblacion": [
                  {
                    "name": "CHAMBO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "GUAMOTE",
            "parroquias": [
              {
                "name": "CEBADAS",
                "poblacion": [
                  {
                    "name": "CEBADAS",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GUAMOTE",
                "poblacion": [
                  {
                    "name": "GUAMOTE",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "CHUNCHI",
            "parroquias": [
              {
                "name": "CHUNCHI",
                "poblacion": [
                  {
                    "name": "CHUNCHI",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "ALAUSI",
            "parroquias": [
              {
                "name": "SIBAMBE",
                "poblacion": [
                  {
                    "name": "ALAUSI",
                    "Z": 0.35
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "COTOPAXI",
        "iden": 5,
        "cantones": [
          {
            "name": "PUJILI",
            "parroquias": [
              {
                "name": "ANGAMARCA",
                "poblacion": [
                  {
                    "name": "ANGAMARCA",
                    "z": 0.3
                  }
                ]
              },
              {
                "name": "ZUMBAHUA",
                "poblacion": [
                  {
                    "name": "ZUMBAHUA",
                    "z": 0.3
                  }
                ]
              },
              {
                "name": "LA VICTORIA",
                "poblacion": [
                  {
                    "name": "LA VICTORIA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PUJILI",
                "poblacion": [
                  {
                    "name": "PUJILI",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "LA MANA",
            "parroquias": [
              {
                "name": "LA MANA",
                "poblacion": [
                  {
                    "name": "LA MANA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "PANGUA",
            "parroquias": [
              {
                "name": "EL CORAZON",
                "poblacion": [
                  {
                    "name": "EL CORAZON",
                    "z": 0.3
                  }
                ]
              },
              {
                "name": "MORASPUNGO",
                "poblacion": [
                  {
                    "name": "MORASPUNGO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "SIGCHOS",
            "parroquias": [
              {
                "name": "SIGCHOS",
                "poblacion": [
                  {
                    "name": "SIGCHOS",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "SALCEDO",
            "parroquias": [
              {
                "name": "CUSUBAMBA",
                "poblacion": [
                  {
                    "name": "CUSUBAMBA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MULALILLO",
                "poblacion": [
                  {
                    "name": "MULALILLO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PANSALEO",
                "poblacion": [
                  {
                    "name": "PANSALEO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "ANTONIO JOSE HOLGUIN",
                "poblacion": [
                  {
                    "name": "ANTONIO JOSE HOLGUIN",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MULLIQUINDIL (SANTA ANA)",
                "poblacion": [
                  {
                    "name": "MULLIQUINDIL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN MIGUEL",
                "poblacion": [
                  {
                    "name": "SAN MIGUEL DE SALCEDO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "LATACUNGA",
            "parroquias": [
              {
                "name": "ALAQUES (ALAQUEZ)",
                "poblacion": [
                  {
                    "name": "ALAQUES",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GUAITACAMA (GUAYTACAMA)",
                "poblacion": [
                  {
                    "name": "GUAITACAMA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "POALO",
                "poblacion": [
                  {
                    "name": "MARISCAL SUCRE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LATACUNGA",
                "poblacion": [
                  {
                    "name": "LATACUNGA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN JUAN DE PASTOCALLE",
                "poblacion": [
                  {
                    "name": "SAN JUAN DE PASTOCALLE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TANICUCHI",
                "poblacion": [
                  {
                    "name": "TANICUCHA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TOACASO",
                "poblacion": [
                  {
                    "name": "TOACASO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MULALO",
                "poblacion": [
                  {
                    "name": "MULALO",
                    "z": 0.4
                  },
                  {
                    "name": "SAN AGUSTIN DE CALLO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SAQUISILI",
            "parroquias": [
              {
                "name": "CHANTILIN",
                "poblacion": [
                  {
                    "name": "SAQUISILI",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "EL ORO",
        "id": 6,
        "cantones": [
          {
            "name": "PORTOVELO",
            "parroquias": [
              {
                "name": "PORTOVELO",
                "poblacion": [
                  {
                    "name": "PORTOVELO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "CHILLA",
            "parroquias": [
              {
                "name": "CHILLA",
                "poblacion": [
                  {
                    "name": "CHILLA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "ATAHUALPA",
            "parroquias": [
              {
                "name": "PACCHA",
                "poblacion": [
                  {
                    "name": "PACCHA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "PIÑAS",
            "parroquias": [
              {
                "name": "PIÑAS",
                "poblacion": [
                  {
                    "name": "PIÑAS",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "ZARUMA",
            "parroquias": [
              {
                "name": "MALVAS",
                "poblacion": [
                  {
                    "name": "ZARUMA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "HUAQUILLAS",
            "parroquias": [
              {
                "name": "HUAQUILLAS",
                "poblacion": [
                  {
                    "name": "HUAQUILLAS",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SANTA ROSA",
            "parroquias": [
              {
                "name": "SANTA ROSA",
                "poblacion": [
                  {
                    "name": "SANTA ROSA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "BELLAVISTA",
                "poblacion": [
                  {
                    "name": "BELLAVISTA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "BELLAMARIA",
                "poblacion": [
                  {
                    "name": "BELLAMARIA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "ARENILLAS",
            "parroquias": [
              {
                "name": "ARENILLAS",
                "poblacion": [
                  {
                    "name": "ARENILLAS",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "MACHALA",
            "parroquias": [
              {
                "name": "MACHALA",
                "poblacion": [
                  {
                    "name": "MACHALA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "BALSAS",
            "parroquias": [
              {
                "name": "BALSAS",
                "poblacion": [
                  {
                    "name": "BALSAS",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "MARCABELI",
            "parroquias": [
              {
                "name": "MARCABELI",
                "poblacion": [
                  {
                    "name": "MARCABELI",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "PASAJE",
            "parroquias": [
              {
                "name": "PASAJE",
                "poblacion": [
                  {
                    "name": "PASAJE",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "EL GUABO",
            "parroquias": [
              {
                "name": "EL GUABO",
                "poblacion": [
                  {
                    "name": "EL GUABO",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "ESMERALDAS",
        "id": 7,
        "cantones": [
          {
            "name": "QUININDE",
            "parroquias": [
              {
                "name": "LA UNION",
                "poblacion": [
                  {
                    "name": "LA UNION",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "VICHE",
                "poblacion": [
                  {
                    "name": "VICHE",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "ROSA ZARATE (QUININDE)",
                "poblacion": [
                  {
                    "name": "MONTERREY",
                    "z": 0.5
                  },
                  {
                    "name": "LA VILLEGAS",
                    "z": 0.5
                  },
                  {
                    "name": "ROSA ZARATE",
                    "z": 0.5
                  },
                  {
                    "name": "LA INDEPENDENCIA",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "MALIMPIA",
                "poblacion": [
                  {
                    "name": "LA TE",
                    "z": 0.5
                  },
                  {
                    "name": "ZAPALLO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "ATACAMES",
            "parroquias": [
              {
                "name": "ATACAMES",
                "poblacion": [
                  {
                    "name": "ATACAMES",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "TONSUPA",
                "poblacion": [
                  {
                    "name": "PUERTO GAVIOTA",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "MUISNE",
            "parroquias": [
              {
                "name": "BOLIVAR",
                "poblacion": [
                  {
                    "name": "BOLIVAR",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "MUISNE",
                "poblacion": [
                  {
                    "name": "MUISNE",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "ESMERALDAS",
            "parroquias": [
              {
                "name": "ESMERALDAS",
                "poblacion": [
                  {
                    "name z": "ESMERALDAS"
                  }
                ]
              }
            ]
          },
          {
            "name": "SAN LORENZO",
            "parroquias": [
              {
                "name": "SAN LORENZO",
                "poblacion": [
                  {
                    "name": "SAN LORENZO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "LA CONCORDIA",
            "parroquias": [
              {
                "name": "LA CONCORDIA",
                "poblacion": [
                  {
                    "name": "LA CONCORDIA",
                    "z": 0.5
                  },
                  {
                    "name": "PLAN PILOTO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "ELOY ALFARO",
            "parroquias": [
              {
                "name": "VALDEZ (LIMONES)",
                "poblacion": [
                  {
                    "name": "VALDEZ",
                    "z": 0.5
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "GUAYAS",
        "id": 8,
        "cantones": [
          {
            "name": "GUAYAQUIL",
            "parroquias": [
              {
                "name": "JUAN GOMEZ RENDON (PROGRESO)",
                "poblacion": [
                  {
                    "name": "JUAN GOMEZ RENDON",
                    "z": 0.5
                  },
                  {
                    "name": "SAN LORENZO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "GUAYAQUIL",
                "poblacion": [
                  {
                    "name": "GUAYAQUIL",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PLAYAS",
            "parroquias": [
              {
                "name": "GENERAL VILLAMIL (PLAYAS)",
                "poblacion": [
                  {
                    "name": "GENERAL VILLAMIL",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "PEDRO CARBO",
            "parroquias": [
              {
                "name": "PEDRO CARBO",
                "poblacion": [
                  {
                    "name": "LA ESTACADA",
                    "z": 0.5
                  },
                  {
                    "name": "ZAMORA NUEVO",
                    "z": 0.4
                  },
                  {
                    "name": "PEDRO CARBO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "VALLE DE LA VIRGEN",
                "poblacion": [
                  {
                    "name": "CASCAJAL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SABANILLA",
                "poblacion": [
                  {
                    "name": "SABANILLA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "EMPALME",
            "parroquias": [
              {
                "name": "GUAYAS (PUEBLO NUEVO)",
                "poblacion": [
                  {
                    "name": "SAN CAMILO",
                    "z": 0.35
                  },
                  {
                    "name": "CARLOS J. AROSEMENA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "VELASCO IBARRA (CAB. EL EMPALME)",
                "poblacion": [
                  {
                    "name": "VELASCO IBARRA",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "EL ROSARIO",
                "poblacion": [
                  {
                    "name": "PEDRO VELEZ",
                    "z": 0.4
                  },
                  {
                    "name": "SANTA LUCIA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SAN JACINTO DE YAGUACHI",
            "parroquias": [
              {
                "name": "SAN JACINTO DE YAGUACHI",
                "poblacion": [
                  {
                    "name": "SAN JACINTO DE YAGUACHI",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "GRAL. PEDRO J. MONTERO (BOLICHE)",
                "poblacion": [
                  {
                    "name": "PEDRO J. MONTERO",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "VIRGEN DE FATIMA",
                "poblacion": [
                  {
                    "name": "TAURA",
                    "z": 0.4
                  },
                  {
                    "name": "KILOMETRO VEINTE Y SEIS",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "MILAGRO",
            "parroquias": [
              {
                "name": "MARISCAL SUCRE (HUAQUES)",
                "poblacion": [
                  {
                    "name": "MARISCAL SUCRE",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "MILAGRO",
                "poblacion": [
                  {
                    "name": "MILAGRO",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "SIMON BOLIVAR",
            "parroquias": [
              {
                "name": "CRNEL. LORENZO DE GARAICOA",
                "poblacion": [
                  {
                    "name": "LORENZO DE GARAICOA",
                    "z": 0.35
                  },
                  {
                    "name": "MATA DE CACAO",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "SIMON BOLIVAR",
                "poblacion": [
                  {
                    "name": "SANTO DOMINGO",
                    "z": 0.35
                  },
                  {
                    "name": "PUEBLO NUEVO",
                    "z": 0.5
                  },
                  {
                    "name": "SIMON BOLIVAR",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "SAMBORONDON",
            "parroquias": [
              {
                "name": "SAMBORONDON",
                "poblacion": [
                  {
                    "name": "SAMBORONDON",
                    "z": 0.35
                  },
                  {
                    "name": "LA PUNTILLA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SALITRE",
            "parroquias": [
              {
                "name": "GRAL. VERNAZA (DOS ESTEROS)",
                "poblacion": [
                  {
                    "name": "GENERAL VERNAZA",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "JUNQUILLAL",
                "poblacion": [
                  {
                    "name": "JUNQUILLAL",
                    "z": 0.4
                  },
                  {
                    "name": "LAUREL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "EL SALITRE (LAS RAMAS)",
                "poblacion": [
                  {
                    "name": "EL SALITRE",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "NARANJITO",
            "parroquias": [
              {
                "name": "NARANJITO",
                "poblacion": [
                  {
                    "name": "NARANJITO",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "CRNEL. MARCELINO MARIDUEÑA",
            "parroquias": [
              {
                "name": "CRNEL. MARCELINO MARIDUEÑA",
                "poblacion": [
                  {
                    "name": "CRNEL. MARCELINO MARIDUEÑA",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "ALFREDO BAQUERIZO MORENO",
            "parroquias": [
              {
                "name": "ALFREDO BAQUERIZO MORENO",
                "poblacion": [
                  {
                    "name": "ALFREDO BAQUERIZO MORENO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "BALZAR",
            "parroquias": [
              {
                "name": "BALZAR",
                "poblacion": [
                  {
                    "name": "LA GUAYAQUIL",
                    "z": 0.4
                  },
                  {
                    "name": "BALZAR",
                    "z": 0.4
                  },
                  {
                    "name": "CERRITOS",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SANTA LUCIA",
            "parroquias": [
              {
                "name": "SANTA LUCIA",
                "poblacion": [
                  {
                    "name": "SANTA LUCIA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "DAULE",
            "parroquias": [
              {
                "name": "DAULE",
                "poblacion": [
                  {
                    "name": "DAULE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LIMONAL",
                "poblacion": [
                  {
                    "name": "EL PiÑAL DE ABAJO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LAUREL",
                "poblacion": [
                  {
                    "name": "LAUREL",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "COLIMES",
            "parroquias": [
              {
                "name": "COLIMES",
                "poblacion": [
                  {
                    "name": "COLIMES",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "LOMAS DE SARGENTILLO",
            "parroquias": [
              {
                "name": "LOMAS DE SARGENTILLO",
                "poblacion": [
                  {
                    "name": "LAS CAÑAS",
                    "z": 0.4
                  },
                  {
                    "name": "LOMAS DE SARGENTILLO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "ISIDRO AYORA",
            "parroquias": [
              {
                "name": "ISIDRO AYORA",
                "poblacion": [
                  {
                    "name": "PUEBLO NUEVO",
                    "z": 0.4
                  },
                  {
                    "name": "LAS MERCEDES",
                    "z": 0.4
                  },
                  {
                    "name": "ISIDRO AYORA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "BALAO",
            "parroquias": [
              {
                "name": "BALAO",
                "poblacion": [
                  {
                    "name": "BALAO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "NARANJAL",
            "parroquias": [
              {
                "name": "NARANJAL",
                "poblacion": [
                  {
                    "name": "NARANJAL",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "EL TRIUNFO",
            "parroquias": [
              {
                "name": "EL TRIUNFO",
                "poblacion": [
                  {
                    "name": "EL TRIUNFO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SAN JACINTO DE YAGUACHI",
            "parroquias": [
              {
                "name": "SAN JACINTO DE YAGUACHI",
                "poblacion": [
                  {
                    "name": "SAN JACINTO DE YAGUACHI",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "GRAL. PEDRO J. MONTERO (BOLICHE)",
                "poblacion": [
                  {
                    "name": "PEDRO J. MONTERO",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "VIRGEN DE FATIMA",
                "poblacion": [
                  {
                    "name": "TAURA",
                    "z": 0.4
                  },
                  {
                    "name": "KILOMETRO VEINTE Y SEIS",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "NOBOL",
            "parroquias": [
              {
                "name": "NARCISA DE JESUS",
                "poblacion": [
                  {
                    "name": "NARCISA DE JESUS",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "DURAN",
            "parroquias": [
              {
                "name": "ELOY ALFARO (DURAN)",
                "poblacion": [
                  {
                    "name": "ELOY ALFARO",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "IMBABURA",
        "id": 9,
        "cantones": [
          {
            "name": "IBARRA",
            "parroquias": [
              {
                "name": "AMBUQUI",
                "poblacion": [
                  {
                    "name": "CARPUELA",
                    "z": 0.4
                  },
                  {
                    "name": "EL JUNCAL",
                    "z": 0.4
                  },
                  {
                    "name": "AMBUQUI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN ANTONIO",
                "poblacion": [
                  {
                    "name": "SAN ANTONIO DE IBARRA",
                    "z": 0.4
                  },
                  {
                    "name": "SAN FRANCISCO DE NATABUELA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SALINAS",
                "poblacion": [
                  {
                    "name": "SALINAS",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN MIGUEL DE IBARRA",
                "poblacion": [
                  {
                    "name": "PRIORATO",
                    "z": 0.4
                  },
                  {
                    "name": "SAN MIGUEL DE YAHUARCOCHA",
                    "z": 0.4
                  },
                  {
                    "name": "CARANQUI",
                    "z": 0.4
                  },
                  {
                    "name": "SANTA ROSA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PIMAMPIRO",
            "parroquias": [
              {
                "name": "PIMAMPIRO",
                "poblacion": [
                  {
                    "name": "CHALGUAYACU",
                    "z": 0.4
                  },
                  {
                    "name": "PIMAMPIRO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MARIANO ACOSTA",
                "poblacion": [
                  {
                    "name": "MARIANO ACOSTA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "OTAVALO",
            "parroquias": [
              {
                "name": "SAN RAFAEL",
                "poblacion": [
                  {
                    "name": "SAN RAFAEL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN JUAN DE ILUMAN",
                "poblacion": [
                  {
                    "name": "SAN JUAN DE ILUMAN",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "DOCTOR MIGUEL EGAS CABEZAS",
                "poblacion": [
                  {
                    "name": "OTAVALO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "EUGENIO ESPEJO (CALPAQUI)",
                "poblacion": [
                  {
                    "name": "CRUZ LOMA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN JOSE DE QUICHINCHE",
                "poblacion": [
                  {
                    "name": "SAN JOSE DE QUICHINCHE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN PABLO",
                "poblacion": [
                  {
                    "name": "SAN PABLO DEL  LAGO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GONZALEZ SUAREZ",
                "poblacion": [
                  {
                    "name": "GONZALEZ SUAREZ",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "ANTONIO ANTE",
            "parroquias": [
              {
                "name": "SAN JOSE DE CHALTURA",
                "poblacion": [
                  {
                    "name": "SAN JOSE DE CHALTURA",
                    "z": 0.4
                  },
                  {
                    "name": "ATUNTAQUI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "IMBAYA (SAN LUIS DE COBUENDO)",
                "poblacion": [
                  {
                    "name": "SAN MIGUEL DE IBARRA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN ROQUE",
                "poblacion": [
                  {
                    "name": "SAN ROQUE",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "COTACACHI",
            "parroquias": [
              {
                "name": "IMANTAG",
                "poblacion": [
                  {
                    "name": "IMANTAG",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "COTACACHI",
                "poblacion": [
                  {
                    "name": "COTACACHI",
                    "z": 0.4
                  },
                  {
                    "name": "LA CALERA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "QUIROGA",
                "poblacion": [
                  {
                    "name": "QUIROGA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SAN MIGUEL DE URCUQUI",
            "parroquias": [
              {
                "name": "CAHUASQUI",
                "poblacion": [
                  {
                    "name": "CAHUASQUI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PABLO ARENAS",
                "poblacion": [
                  {
                    "name": "PABLO ARENAS",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TUMBABIRO",
                "poblacion": [
                  {
                    "name": "TUMBABIRO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "URCUQUI",
                "poblacion": [
                  {
                    "name": "SAN BLAS",
                    "z": 0.4
                  },
                  {
                    "name": "URCUQUI",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "LOJA",
        "id": 10,
        "cantones": [
          {
            "name": "CHAGUARPAMBA",
            "parroquias": [
              {
                "name": "CHAGUARPAMBA",
                "poblacion": [
                  {
                    "name": "CHAGUARPAMBA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "PALTAS",
            "parroquias": [
              {
                "name": "CATACOCHA",
                "poblacion": [
                  {
                    "name": "CATACOCHA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "PUYANGO",
            "parroquias": [
              {
                "name": "ALAMOR",
                "poblacion": [
                  {
                    "name": "ALAMOR",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "MACARA",
            "parroquias": [
              {
                "name": "MACARA",
                "poblacion": [
                  {
                    "name": "MACARA",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "CELICA",
            "parroquias": [
              {
                "name": "CELICA",
                "poblacion": [
                  {
                    "name": "CELICA",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "SOZORANGA",
            "parroquias": [
              {
                "name": "SOZORANGA",
                "poblacion": [
                  {
                    "name": "SOZORANGA",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "CATAMAYO",
            "parroquias": [
              {
                "name": "CATAMAYO (LA TOMA)",
                "poblacion": [
                  {
                    "name": "CATAMAYO",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "ESPINDOLA",
            "parroquias": [
              {
                "name": "AMALUZA",
                "poblacion": [
                  {
                    "name": "AMALUZA",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "QUILANGA",
            "parroquias": [
              {
                "name": "QUILANGA",
                "poblacion": [
                  {
                    "name": "QUILANGA",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "CALVAS",
            "parroquias": [
              {
                "name": "CARIAMANGA",
                "poblacion": [
                  {
                    "name": "CARIAMANGA",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "LOJA",
            "parroquias": [
              {
                "name": "LOJA",
                "poblacion": [
                  {
                    "name": "LOJA",
                    "z": 0.25
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "LOS RIOS",
        "id": 11,
        "cantones": [
          {
            "name": "BUENA FE",
            "parroquias": [
              {
                "name": "SAN JACINTO DE BUENA FE",
                "poblacion": [
                  {
                    "name": "SAN JACINTO DE BUENA FE",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "PATRICIA PILAR",
                "poblacion": [
                  {
                    "name": "PATRICIA PILAR",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PALENQUE",
            "parroquias": [
              {
                "name": "PALENQUE",
                "poblacion": [
                  {
                    "name": "JAUNECHE",
                    "z": 0.35
                  },
                  {
                    "name": "PALENQUE",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "VINCES",
            "parroquias": [
              {
                "name": "ANTONIO SOTOMAYOR",
                "poblacion": [
                  {
                    "name": "ANTONIO SOTOMAYOR",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "VINCES",
                "poblacion": [
                  {
                    "name": "VINCES",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "BABA",
            "parroquias": [
              {
                "name": "BABA",
                "poblacion": [
                  {
                    "name": "BABA",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "QUEVEDO",
            "parroquias": [
              {
                "name": "QUEVEDO",
                "poblacion": [
                  {
                    "name": "QUEVEDO",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "SAN CARLOS",
                "poblacion": [
                  {
                    "name": "SAN CARLOS",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "BABAHOYO",
            "parroquias": [
              {
                "name": "LA UNION",
                "poblacion": [
                  {
                    "name": "LA UNION",
                    "z": 0.3
                  }
                ]
              },
              {
                "name": "BABAHOYO",
                "poblacion": [
                  {
                    "name": "BABAHOYO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "VALENCIA",
            "parroquias": [
              {
                "name": "VALENCIA",
                "poblacion": [
                  {
                    "name": "COSTA AZUL",
                    "z": 0.3
                  },
                  {
                    "name": "VALENCIA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "MONTALVO",
            "parroquias": [
              {
                "name": "MONTALVO",
                "poblacion": [
                  {
                    "name": "MONTALVO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "QUINSALOMA",
            "parroquias": [
              {
                "name": "QUINSALOMA",
                "poblacion": [
                  {
                    "name": "QUINSALOMA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "PUEBLOVIEJO",
            "parroquias": [
              {
                "name": "SAN JUAN",
                "poblacion": [
                  {
                    "name": "SAN JUAN",
                    "z": 0.3
                  }
                ]
              },
              {
                "name": "PUEBLOVIEJO",
                "poblacion": [
                  {
                    "name": "PUEBLOVIEJO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "MOCACHE",
            "parroquias": [
              {
                "name": "MOCACHE",
                "poblacion": [
                  {
                    "name": "MOCACHE",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "URDANETA",
            "parroquias": [
              {
                "name": "CATARAMA",
                "poblacion": [
                  {
                    "name": "CATARAMA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "VENTANAS",
            "parroquias": [
              {
                "name": "VENTANAS",
                "poblacion": [
                  {
                    "name": "VENTANAS",
                    "z": 0.3
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "MANABI",
        "id": 12,
        "cantones": [
          {
            "name": "PORTOVIEJO",
            "parroquias": [
              {
                "name": "PORTOVIEJO",
                "poblacion": [
                  {
                    "name": "COLON",
                    "z": 0.5
                  },
                  {
                    "name": "EL LIMON",
                    "z": 0.5
                  },
                  {
                    "name": "PORTOVIEJO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "RIOCHICO (RIO CHICO)",
                "poblacion": [
                  {
                    "name": "RIOCHICO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "ABDON CALDERON (SAN FRANCISCO)",
                "poblacion": [
                  {
                    "name": "CALDERON",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "SAN PLACIDO",
                "poblacion": [
                  {
                    "name": "SAN PLACIDO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "JIPIJAPA",
            "parroquias": [
              {
                "name": "JULCUY",
                "poblacion": [
                  {
                    "name": "JULCUY",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "JIPIJAPA",
                "poblacion": [
                  {
                    "name": "SANCAN",
                    "z": 0.5
                  },
                  {
                    "name": "JIPIJAPA",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "MEMBRILLAL",
                "poblacion": [
                  {
                    "name": "MEMBRILLAL",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "EL ANEGADO (CAB EN ELOY ALFARO)",
                "poblacion": [
                  {
                    "name": "EL ANEGADO",
                    "z": 0.5
                  },
                  {
                    "name": "AGUA PATO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "PEDRO PABLO GOMEZ",
                "poblacion": [
                  {
                    "name": "PEDRO PABLO GOMEZ",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "PUERTO DE CAYO",
                "poblacion": [
                  {
                    "name": "PUERTO DE CAYO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "SUCRE",
            "parroquias": [
              {
                "name": "CHARAPOTO",
                "poblacion": [
                  {
                    "name": "CHARAPOTO",
                    "z": 0.5
                  },
                  {
                    "name": "SAN JACINTO",
                    "z": 0.5
                  },
                  {
                    "name": "EL PUEBLITO",
                    "z": 0.5
                  },
                  {
                    "name": "SAN CLEMENTE",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "BAHIA DE CARAQUEZ",
                "poblacion": [
                  {
                    "name": "LEONIDAS PLAZA",
                    "z": 0.5
                  },
                  {
                    "name": "BAHIA DE CARAQUEZ",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "FLAVIO ALFARO",
            "parroquias": [
              {
                "name": "FLAVIO ALFARO",
                "poblacion": [
                  {
                    "name": "FLAVIO ALFARO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "EL CARMEN",
            "parroquias": [
              {
                "name": "SAN PEDRO DE SUMA",
                "poblacion": [
                  {
                    "name": "SAN PEDRO DE SUMA",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "EL CARMEN",
                "poblacion": [
                  {
                    "name": "EL CARMEN",
                    "z": 0.4
                  },
                  {
                    "name": "LA BRAMADORA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "ROCAFUERTE",
            "parroquias": [
              {
                "name": "ROCAFUERTE",
                "poblacion": [
                  {
                    "name": "ROCAFUERTE",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "BAHIA DE CARAQUEZ",
            "parroquias": [
              {
                "name": "SAN ISIDRO",
                "poblacion": [
                  {
                    "name": "SAN ISIDRO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "CHONE",
            "parroquias": [
              {
                "name": "ELOY ALFARO",
                "poblacion": [
                  {
                    "name": "ELOY ALFARO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "CHONE",
                "poblacion": [
                  {
                    "name": "CHONE",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "CANUTO",
                "poblacion": [
                  {
                    "name": "CANUTO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "SAN VICENTE",
            "parroquias": [
              {
                "name": "SAN VICENTE",
                "poblacion": [
                  {
                    "name": "SAN VICENTE",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "BOLIVAR",
            "parroquias": [
              {
                "name": "CALCETA",
                "poblacion": [
                  {
                    "name": "CALCETA",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "QUIROGA",
                "poblacion": [
                  {
                    "name": "QUIROGA",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "MEMBRILLO",
                "poblacion": [
                  {
                    "name": "MEMBRILLO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "JARAMIJO",
            "parroquias": [
              {
                "name": "JARAMIJO",
                "poblacion": [
                  {
                    "name": "JARAMIJO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "SANTA ANA",
            "parroquias": [
              {
                "name": "SANTA ANA DE VUELTA LARGA",
                "poblacion": [
                  {
                    "name": "SANTA ANA DE VUELTA LARGA",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "SAN PABLO (PUEBLO NUEVO)",
                "poblacion": [
                  {
                    "name": "SAN PABLO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LA UNION",
                "poblacion": [
                  {
                    "name": "LA UNION",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "MANTA",
            "parroquias": [
              {
                "name": "MANTA",
                "poblacion": [
                  {
                    "name": "EL AROMO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "SAN LORENZO",
                "poblacion": [
                  {
                    "name": "SAN LORENZO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "SANTA MARIANITA",
                "poblacion": [
                  {
                    "name": "PACOCHE ABAJO",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "MONTECRISTI",
            "parroquias": [
              {
                "name": "MONTECRISTI",
                "poblacion": [
                  {
                    "name": "PILES",
                    "z": 0.5
                  },
                  {
                    "name": "RIO DE CAÑA",
                    "z": 0.5
                  },
                  {
                    "name": "MONTECRISTI",
                    "z": 0.5
                  },
                  {
                    "name": "MANTA",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "24 DE MAYO",
            "parroquias": [
              {
                "name": "SUCRE",
                "poblacion": [
                  {
                    "name": "SUCRE",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "BELLAVISTA",
                "poblacion": [
                  {
                    "name": "EL ESFUERZO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "NOBOA",
                "poblacion": [
                  {
                    "name": "NOBOA",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "OLMEDO",
            "parroquias": [
              {
                "name": "OLMEDO",
                "poblacion": [
                  {
                    "name": "BELLAVISTA",
                    "z": 0.5
                  },
                  {
                    "name": "OLMEDO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PAJAN",
            "parroquias": [
              {
                "name": "PAJAN",
                "poblacion": [
                  {
                    "name": "PAJAN",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "CASCOL",
                "poblacion": [
                  {
                    "name": "CASCOL",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "LASCANO",
                "poblacion": [
                  {
                    "name": "LASCANO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GUALE",
                "poblacion": [
                  {
                    "name": "GUALE",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PUERTO LOPEZ",
            "parroquias": [
              {
                "name": "PUERTO LOPEZ",
                "poblacion": [
                  {
                    "name": "PUERTO LOPEZ",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "SALANGO",
                "poblacion": [
                  {
                    "name": "SALANGO",
                    "z": 0.5
                  },
                  {
                    "name": "RIO CHICO",
                    "z": 0.5
                  },
                  {
                    "name": "AYAMPE",
                    "z": 0.5
                  },
                  {
                    "name": "PUERTO RICO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "MACHALILLA",
                "poblacion": [
                  {
                    "name": "MACHALILLA",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "PEDERNALES",
            "parroquias": [
              {
                "name": "COJIMIES",
                "poblacion": [
                  {
                    "name": "COJIMIES",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "PEDERNALES",
                "poblacion": [
                  {
                    "name": "PEDERNALES",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "JUNIN",
            "parroquias": [
              {
                "name": "JUNIN",
                "poblacion": [
                  {
                    "name": "JUNIN",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "TOSAGUA",
            "parroquias": [
              {
                "name": "TOSAGUA",
                "poblacion": [
                  {
                    "name": "TOSAGUA",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "JAMA",
            "parroquias": [
              {
                "name": "JAMA",
                "poblacion": [
                  {
                    "name": "JAMA",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "PICHINCHA",
            "parroquias": [
              {
                "name": "BARRAGANETE",
                "poblacion": [
                  {
                    "name": "BARRAGANETE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PICHINCHA",
                "poblacion": [
                  {
                    "name": "PICHINCHA",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "MORONA SANTIAGO",
        "id": 13,
        "cantones": [
          {
            "name": "PALORA",
            "parroquias": [
              {
                "name": "PALORA (METZERA)",
                "poblacion": [
                  {
                    "name": "PALORA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "PABLO SEXTO",
            "parroquias": [
              {
                "name": "PABLO SEXTO",
                "poblacion": [
                  {
                    "name": "PABLO SEXTO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "LIMON INDANZA",
            "parroquias": [
              {
                "name": "GRAL. LEONIDAS PLAZA GUTIERREZ",
                "poblacion": [
                  {
                    "name": "GRAL. LEONIDAS PLAZA GUTIERREZ",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "SANTIAGO",
            "parroquias": [
              {
                "name": "SANTIAGO DE MENDEZ",
                "poblacion": [
                  {
                    "name": "SANTIAGO DE MENDEZ",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "SUCUA",
            "parroquias": [
              {
                "name": "SUCUA",
                "poblacion": [
                  {
                    "name": "SUCUA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "MORONA",
            "parroquias": [
              {
                "name": "MACAS",
                "poblacion": [
                  {
                    "name": "MACAS",
                    "z": 0.3
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "NAPO",
        "id": 14,
        "cantones": [
          {
            "name": "EL CHACO",
            "parroquias": [
              {
                "name": "EL CHACO",
                "poblacion": [
                  {
                    "name": "EL CHACO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "QUIJOS",
            "parroquias": [
              {
                "name": "CUYUJA",
                "poblacion": [
                  {
                    "name": "CUYUJA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN FRANCISCO DE BORJA",
                "poblacion": [
                  {
                    "name": "SAN FRANCISCO DE BORJA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "BAEZA",
                "poblacion": [
                  {
                    "name": "BAEZA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PAPALLACTA",
                "poblacion": [
                  {
                    "name": "PAPALLACTA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "ARCHIDONA",
            "parroquias": [
              {
                "name": "ARCHIDONA",
                "poblacion": [
                  {
                    "name": "ARCHIDONA",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "COTUNDO",
                "poblacion": [
                  {
                    "name": "COTUNDO",
                    "z": 0.35
                  }
                ]
              }
            ]
          },
          {
            "name": "TENA",
            "parroquias": [
              {
                "name": "TENA",
                "poblacion": [
                  {
                    "name": "TENA",
                    "z": 0.35
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "ORELLANA",
        "id": 15,
        "cantones": [
          {
            "name": "AGUARICO",
            "parroquias": [
              {
                "name": "NUEVO ROCAFUERTE",
                "poblacion": [
                  {
                    "name": "NUEVO ROCAFUERTE",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "TIPUTINI",
                "poblacion": [
                  {
                    "name": "TIPUTINI",
                    "z": 0.15
                  }
                ]
              }
            ]
          },
          {
            "name": "ORELLANA",
            "parroquias": [
              {
                "name": "TARACOA",
                "poblacion": [
                  {
                    "name": "TARACOA",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "PUERTO FRANCISCO DE ORELLANA",
                "poblacion": [
                  {
                    "name": "PAYAMINO",
                    "z": 0.25
                  },
                  {
                    "name": "PUERTO FRANCISCO DE ORELLANA",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "LA JOYA DE LOS SACHAS",
            "parroquias": [
              {
                "name": "LA JOYA DE LOS SACHAS",
                "poblacion": [
                  {
                    "name": "LA JOYA DE LOS SACHAS",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "SAN SEBASTIAN DEL COCA",
                "poblacion": [
                  {
                    "name": "SAN SEBASTIAN DEL COCA",
                    "z": 0.25
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "PASTAZA",
        "id": 16,
        "cantones": [
          {
            "name": "MERA",
            "parroquias": [
              {
                "name": "SHELL",
                "poblacion": [
                  {
                    "name": "SHELL",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "PASTAZA",
            "parroquias": [
              {
                "name": "PUYO",
                "poblacion": [
                  {
                    "name": "PUYO",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "MERA",
            "parroquias": [
              {
                "name": "MERA",
                "poblacion": [
                  {
                    "name": "MERA",
                    "z": 0.35
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "PICHINCHA",
        "id": 17,
        "cantones": [
          {
            "name": "PUERTO QUITO",
            "parroquias": [
              {
                "name": "PUERTO QUITO",
                "poblacion": [
                  {
                    "name": "SIMÓN BOLIVAR",
                    "z": 0.5
                  },
                  {
                    "name": "BUENOS AIRES",
                    "z": 0.5
                  },
                  {
                    "name": "PUERTO QUITO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "QUITO",
            "parroquias": [
              {
                "name": "EL QUINCHE",
                "poblacion": [
                  {
                    "name": "EL QUINCHE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN ANTONIO",
                "poblacion": [
                  {
                    "name": "SAN ANTONIO DE PICHINCHA",
                    "z": 0.4
                  },
                  {
                    "name": "CASPIGASI DEL CARMEN",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "CUMBAYA",
                "poblacion": [
                  {
                    "name": "CUMBAYA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GUANGOPOLO",
                "poblacion": [
                  {
                    "name": "ARMENIA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "AMAGUAÑA",
                "poblacion": [
                  {
                    "name": "UYUMBICHO",
                    "z": 0.4
                  },
                  {
                    "name": "AMAGUAÑA",
                    "z": 0.4
                  },
                  {
                    "name": "SAN RAFAEL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GUAYLLABAMBA",
                "poblacion": [
                  {
                    "name": "GUAYLLABAMBA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "POMASQUI",
                "poblacion": [
                  {
                    "name": "POMASQUI",
                    "z": 0.4
                  },
                  {
                    "name": "QUITO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "CALDERON (CARAPUNGO)",
                "poblacion": [
                  {
                    "name": "CALDERON",
                    "z": 0.4
                  },
                  {
                    "name": "LLANO GRANDE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "NAYON",
                "poblacion": [
                  {
                    "name": "NAYON",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "ZAMBIZA",
                "poblacion": [
                  {
                    "name": "ZAMBIZA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "YARUQUI",
                "poblacion": [
                  {
                    "name": "YARUQUI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "CHECA (CHILPA)",
                "poblacion": [
                  {
                    "name": "CHECA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PINTAG",
                "poblacion": [
                  {
                    "name": "PINTAG",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LA MERCED",
                "poblacion": [
                  {
                    "name": "LA MERCED",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PUEMBO",
                "poblacion": [
                  {
                    "name": "PUEMBO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TABABELA",
                "poblacion": [
                  {
                    "name": "TABABELA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "NANEGAL",
                "poblacion": [
                  {
                    "name": "NANEGAL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GUALEA",
                "poblacion": [
                  {
                    "name": "GUALEA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PERUCHO",
                "poblacion": [
                  {
                    "name": "PERUCHO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PUELLARO",
                "poblacion": [
                  {
                    "name": "PUELLARO",
                    "z": 0.4
                  },
                  {
                    "name": "ALCHIPICHI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "CALACALI",
                "poblacion": [
                  {
                    "name": "PULULAHUA",
                    "z": 0.4
                  },
                  {
                    "name": "CALACALI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "ATAHUALPA (HABASPAMBA)",
                "poblacion": [
                  {
                    "name": "ATAHUALPA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN JOSE DE MINAS",
                "poblacion": [
                  {
                    "name": "SAN JOSE DE MINAS",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "NANEGALITO",
                "poblacion": [
                  {
                    "name": "NANEGALITO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TUMBACO",
                "poblacion": [
                  {
                    "name": "TUMBACO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PIFO",
                "poblacion": [
                  {
                    "name": "PIFO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "CONOCOTO",
                "poblacion": [
                  {
                    "name": "SANTA ROSA",
                    "z": 0.4
                  },
                  {
                    "name": "CONOCOTO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "ALANGASI",
                "poblacion": [
                  {
                    "name": "ALANGASI",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "MEJIA",
            "parroquias": [
              {
                "name": "ALOAG",
                "poblacion": [
                  {
                    "name": "ALOAG",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MACHACHI",
                "poblacion": [
                  {
                    "name": "ALOAG",
                    "z": 0.4
                  },
                  {
                    "name": "MACHACHI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TAMBILLO",
                "poblacion": [
                  {
                    "name": "TAMBILLO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "CAYAMBE",
            "parroquias": [
              {
                "name": "CANGAHUA",
                "poblacion": [
                  {
                    "name": "CANGAHUA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "ASCAZUBI",
                "poblacion": [
                  {
                    "name": "ASCAZUBI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "CAYAMBE",
                "poblacion": [
                  {
                    "name": "HUAYCUPATA",
                    "z": 0.4
                  },
                  {
                    "name": "CAYAMBE",
                    "z": 0.4
                  },
                  {
                    "name": "JUAN MONTALVO",
                    "z": 0.4
                  },
                  {
                    "name": "AYORA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "OLMEDO (PECILLO)",
                "poblacion": [
                  {
                    "name": "OLMEDO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PEDRO MONCAYO",
            "parroquias": [
              {
                "name": "TABACUNDO",
                "poblacion": [
                  {
                    "name": "ANGUMBA",
                    "z": 0.4
                  },
                  {
                    "name": "TABACUNDO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TUPIGACHI",
                "poblacion": [
                  {
                    "name": "TUPIGACHI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LA ESPERANZA",
                "poblacion": [
                  {
                    "name": "LA ESPERANZA",
                    "z": 0.4
                  },
                  {
                    "name": "GUARAQUI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TOCACHI",
                "poblacion": [
                  {
                    "name": "TOCACHI",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MALCHINGUI",
                "poblacion": [
                  {
                    "name": "MALCHINGUI",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SAN MIGUEL DE LOS BANCOS",
            "parroquias": [
              {
                "name": "SAN MIGUEL DE LOS BANCOS",
                "poblacion": [
                  {
                    "name": "SAN MIGUEL DE LOS BANCOS",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "RUMIÑAHUI",
            "parroquias": [
              {
                "name": "SANGOLQUI",
                "poblacion": [
                  {
                    "name": "SANGOLQUI",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PEDRO VICENTE MALDONADO",
            "parroquias": [
              {
                "name": "PEDRO VICENTE MALDONADO",
                "poblacion": [
                  {
                    "name": "PEDRO VICENTE MALDONADO",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "SANTA ELENA",
        "id": 18,
        "cantones": [
          {
            "name": "SANTA ELENA",
            "parroquias": [
              {
                "name": "SANTA ELENA",
                "poblacion": [
                  {
                    "name": "SAN PABLO",
                    "z": 0.5
                  },
                  {
                    "name": "SANTA ELENA",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "ATAHUALPA",
                "poblacion": [
                  {
                    "name": "ATAHUALPA",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "MANGLARALTO",
                "poblacion": [
                  {
                    "name": "SAN JOSE",
                    "z": 0.5
                  },
                  {
                    "name": "SAN JOSE",
                    "z": 0.5
                  },
                  {
                    "name": "LA CURIA",
                    "z": 0.5
                  },
                  {
                    "name": "OLON",
                    "z": 0.5
                  },
                  {
                    "name": "MONTAÑITA",
                    "z": 0.5
                  },
                  {
                    "name": "EL MAMEY",
                    "z": 0.5
                  },
                  {
                    "name": "SAN PEDRO DE VALDIVIA",
                    "z": 0.5
                  },
                  {
                    "name": "SINCAL",
                    "z": 0.5
                  },
                  {
                    "name": "MANGLARALTO",
                    "z": 0.5
                  }
                ]
              },
              {
                "name": "COLONCHE",
                "poblacion": [
                  {
                    "name": "FEBRES CORDERO",
                    "z": 0.5
                  },
                  {
                    "name": "BAMBIL CALLAO",
                    "z": 0.5
                  },
                  {
                    "name": "BARCELONA",
                    "z": 0.5
                  },
                  {
                    "name": "AYANGUE",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "SALINAS",
            "parroquias": [
              {
                "name": "SALINAS",
                "poblacion": [
                  {
                    "name": "LA LIBERTAD",
                    "z": 0.5
                  },
                  {
                    "name": "SALINAS",
                    "z": 0.5
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "STO. DOMINGO DE LOS TSACHILAS",
        "id": 19,
        "cantones": [
          {
            "name": "SANTO DOMINGO",
            "parroquias": [
              {
                "name": "SANTA MARIA DEL TOACHI",
                "poblacion": [
                  {
                    "name": "SANTA MARIA DEL TOACHI",
                    "z": 0.35
                  }
                ]
              },
              {
                "name": "LUZ DE AMERICA",
                "poblacion": [
                  {
                    "name": "LUZ DE AMERICA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PUERTO LIMON",
                "poblacion": [
                  {
                    "name": "PUERTO LIMON",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "EL ESFUERZO",
                "poblacion": [
                  {
                    "name": "EL ESFUERZO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN JACINTO DEL BUA",
                "poblacion": [
                  {
                    "name": "SAN JACINTO DEL BUA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "VALLE HERMOSO",
                "poblacion": [
                  {
                    "name": "VALLE HERMOSO",
                    "z": 0.4
                  },
                  {
                    "name": "CRISTOBAL COLON",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "STO. DOMINGO DE LOS COLORADOS",
                "poblacion": [
                  {
                    "name": "NUEVO ISRAEL",
                    "z": 0.4
                  },
                  {
                    "name": "LAS DELICIAS",
                    "z": 0.4
                  },
                  {
                    "name": "LA AURORA",
                    "z": 0.4
                  },
                  {
                    "name": "JULIO MORENO",
                    "z": 0.4
                  },
                  {
                    "name": "UNION CIVICA POPULAR",
                    "z": 0.4
                  },
                  {
                    "name": "SUSANITA",
                    "z": 0.4
                  },
                  {
                    "name": "EULOGIO",
                    "z": 0.4
                  },
                  {
                    "name": "SANTO DOMINGO DE LOS COLORADOS",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "SUCUMBIOS",
        "id": 20,
        "cantones": [
          {
            "name": "SHUSHUFINDI",
            "parroquias": [
              {
                "name": "SHUSHUFINDI",
                "poblacion": [
                  {
                    "name": "SHUSHUFINDI",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "SIETE DE JULIO",
                "poblacion": [
                  {
                    "name": "SIETE DE JULIO",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "SAN PEDRO DE LOS COFANES",
                "poblacion": [
                  {
                    "name": "SAN PEDRO DE LOS COFANES",
                    "z": 0.15
                  },
                  {
                    "name": "JIVINO",
                    "z": 0.15
                  }
                ]
              }
            ]
          },
          {
            "name": "LAGO AGRIO",
            "parroquias": [
              {
                "name": "EL ENO",
                "poblacion": [
                  {
                    "name": "EL ENO",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "PACAYACU",
                "poblacion": [
                  {
                    "name": "AGUARICO",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "NUEVA LOJA",
                "poblacion": [
                  {
                    "name": "PUERTO AGUARICO",
                    "z": 0.15
                  },
                  {
                    "name": "NUEVA LOJA",
                    "z": 0.15
                  },
                  {
                    "name": "SANTA ROSA",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "SANTA CECILIA",
                "poblacion": [
                  {
                    "name": "SANTA CECILIA",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "GENERAL FARFAN",
                "poblacion": [
                  {
                    "name": "GENERAL FARFAN",
                    "z": 0.15
                  },
                  {
                    "name": "SAN MIGUEL",
                    "z": 0.15
                  }
                ]
              },
              {
                "name": "JAMBELI",
                "poblacion": [
                  {
                    "name": "JAMBELI",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "CUYABENO",
            "parroquias": [
              {
                "name": "TARAPOA",
                "poblacion": [
                  {
                    "name": "CHIRITZA",
                    "z": 0.15
                  }
                ]
              }
            ]
          },
          {
            "name": "PUTUMAYO",
            "parroquias": [
              {
                "name": "PUERTO EL CARMEN DEL PUTUMAYO",
                "poblacion": [
                  {
                    "name": "PUERTO EL CARMEN DEL PUTUMAYO",
                    "z": 0.15
                  }
                ]
              }
            ]
          },
          {
            "name": "CASCALES",
            "parroquias": [
              {
                "name": "SEVILLA",
                "poblacion": [
                  {
                    "name": "SEVILLA",
                    "z": 0.25
                  }
                ]
              },
              {
                "name": "EL DORADO DE CASCALES",
                "poblacion": [
                  {
                    "name": "EL DORADO DE CASCALES",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "GONZALO PIZARRO",
            "parroquias": [
              {
                "name": "LUMBAQUI",
                "poblacion": [
                  {
                    "name": "EL DORADO DE CASCALES",
                    "z": 0.3
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "TUNGURAHUA",
        "id": 21,
        "cantones": [
          {
            "name": "AMBATO",
            "parroquias": [
              {
                "name": "PILAGUIN (PILAHUIN)",
                "poblacion": [
                  {
                    "name": "COMUNA TAMBO LOMA",
                    "z": 0.35
                  },
                  {
                    "name": "PILAHUIN",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "IZAMBA",
                "poblacion": [
                  {
                    "name": "CORAZON DE JESUS",
                    "z": 0.4
                  },
                  {
                    "name": "URBANIZACION AEROPUERTO",
                    "z": 0.4
                  },
                  {
                    "name": "IZAMBA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "QUISAPINCHA (QUIZAPINCHA)",
                "poblacion": [
                  {
                    "name": "QUINSAPINCHA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "JUAN BENIGNO VELA",
                "poblacion": [
                  {
                    "name": "JUAN BENIGNO VELA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "AUGUSTO N. MARTINEZ",
                "poblacion": [
                  {
                    "name": "MARTINEZ",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PICAIGUA",
                "poblacion": [
                  {
                    "name": "SAN ISIDRO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "TOTORAS",
                "poblacion": [
                  {
                    "name": "TOTORAS",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "AMBATILLO",
                "poblacion": [
                  {
                    "name": "AMBATILLO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "ATAHUALPA (CHISALATA)",
                "poblacion": [
                  {
                    "name": "ATAHUALPA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "HUACHI GRANDE",
                "poblacion": [
                  {
                    "name": "HUACHI GRANDE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SANTA ROSA",
                "poblacion": [
                  {
                    "name": "SANTA ROSA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "AMBATO",
                "poblacion": [
                  {
                    "name": "AMBATO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PASA",
                "poblacion": [
                  {
                    "name": "SAN ANTONIO DE PASA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN BARTOLOME DE PINLLOG",
                "poblacion": [
                  {
                    "name": "SAN BARTOLOME DE PINLLOG",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN FERNANDO",
                "poblacion": [
                  {
                    "name": "SAN FERNANDO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "CUNCHIBAMBA",
                "poblacion": [
                  {
                    "name": "CUNCHIBAMBA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SANTIAGO DE PILLARO",
            "parroquias": [
              {
                "name": "SAN MIGUELITO",
                "poblacion": [
                  {
                    "name": "SAN MIGUELITO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "EMILIO MARIA TERAN (RUMIPAMBA)",
                "poblacion": [
                  {
                    "name": "EMILIO M. TERAN",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "MARCOS ESPINEL (CHACATA)",
                "poblacion": [
                  {
                    "name": "MARCOS ESPINEL",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN ANDRES",
                "poblacion": [
                  {
                    "name": "SAN ANDRES",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "SAN JOSE DE POALO",
                "poblacion": [
                  {
                    "name": "SAN JOSE DE POALO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "PILLARO",
                "poblacion": [
                  {
                    "name": "PILLARO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "SAN PEDRO DE PELILEO",
            "parroquias": [
              {
                "name": "PELILEO",
                "poblacion": [
                  {
                    "name": "PELILEO",
                    "z": 0.4
                  },
                  {
                    "name": "PELILEO GRANDE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "GUAMBALO (HUAMBALO)",
                "poblacion": [
                  {
                    "name": "GUAMBALO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "COTALO",
                "poblacion": [
                  {
                    "name": "COTALO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "BAÑOS DE AGUA SANTA",
            "parroquias": [
              {
                "name": "BAÑOS DE AGUA SANTA",
                "poblacion": [
                  {
                    "name": "BAÑOS DE AGUA SANTA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "ULBA",
                "poblacion": [
                  {
                    "name": "ULBA",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "RIO VERDE",
                "poblacion": [
                  {
                    "name": "RIO VERDE",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "TISALEO",
            "parroquias": [
              {
                "name": "TISALEO",
                "poblacion": [
                  {
                    "name": "TISALEO",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "CEVALLOS",
            "parroquias": [
              {
                "name": "CEVALLOS",
                "poblacion": [
                  {
                    "name": "CEVALLOS",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "QUERO",
            "parroquias": [
              {
                "name": "QUERO",
                "poblacion": [
                  {
                    "name": "QUERO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "RUMIPAMBA",
                "poblacion": [
                  {
                    "name": "RUMIPAMBA",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "PATATE",
            "parroquias": [
              {
                "name": "PATATE",
                "poblacion": [
                  {
                    "name": "PATATE",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "EL TRIUNFO",
                "poblacion": [
                  {
                    "name": "EL TRIUNFO",
                    "z": 0.4
                  }
                ]
              },
              {
                "name": "LOS ANDES (CAB EN POATUG)",
                "poblacion": [
                  {
                    "name": "SUCRE",
                    "z": 0.4
                  }
                ]
              }
            ]
          },
          {
            "name": "MOCHA",
            "parroquias": [
              {
                "name": "MOCHA",
                "poblacion": [
                  {
                    "name": "MOCHA",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "ZAMORA CHINCHIPE",
        "id": 22,
        "cantones": [
          {
            "name": "NANGARITZA",
            "parroquias": [
              {
                "name": "GUAYZIMI",
                "poblacion": [
                  {
                    "name": "GUAYZIMI",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "YANTZAZA",
            "parroquias": [
              {
                "name": "YANTZAZA (YANZATZA)",
                "poblacion": [
                  {
                    "name": "YANTZAZA",
                    "z": 0.3
                  }
                ]
              }
            ]
          },
          {
            "name": "CHINCHIPE",
            "parroquias": [
              {
                "name": "ZUMBA",
                "poblacion": [
                  {
                    "name": "ZUMBA",
                    "z": 0.25
                  }
                ]
              }
            ]
          },
          {
            "name": "ZAMORA",
            "parroquias": [
              {
                "name": "ZAMORA",
                "poblacion": [
                  {
                    "name": "ZAMORA",
                    "z": 0.25
                  },
                  {
                    "name": "ZAMORA",
                    "z": 0.25
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "ZONA NO DELIMITADA",
        "id": 23,
        "cantones": [
          {
            "name": "LAS GOLONDRINAS",
            "parroquias": [
              {
                "name": "LAS GOLONDRINAS",
                "poblacion": [
                  {
                    "name": "LAS GOLONDRINAS",
                    "z": 0.5
                  }
                ]
              }
            ]
          },
          {
            "name": "MANGA DEL CURA",
            "parroquias": [
              {
                "name": "MANGA DEL CURA",
                "poblacion": [
                  {
                    "name": "SANTA MARIA",
                    "z": 0.4
                  },
                  {
                    "name": "SANTA TERESA",
                    "z": 0.4
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }


  /**
  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
      console.log('dbcreada');
    }else{
      console.log('db no creada');
    }
  }

  create(task: any){
    let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
    
    return this.db.executeSql(sql, []);
  }

  delete(task: any){
    let sql = 'DELETE FROM tasks WHERE id=?';
    return this.db.executeSql(sql, [task.id]);
  }

  getAll(){
    let sql = 'SELECT * FROM tasks';
    return this.db.executeSql(sql, [])
    .then(response => {
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve( tasks );
    })
    .catch(error => Promise.reject(error));
  }

  update(task: any){
    let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
    
    return this.db.executeSql(sql, [task.title, task.completed, task.id]);
  }**/

}
