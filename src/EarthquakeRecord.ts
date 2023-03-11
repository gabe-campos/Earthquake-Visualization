/* Assignment 3: Earthquake Visualization
 * CSCI 4611, Spring 2023, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

// You do not need to change existing code in this class.

export class EarthquakeRecord
{
    public date : Date;
    public longitude : number;
    public latitude : number;
    public magnitude : number;
    public normalizedMagnitude : number;

    constructor(line : string)
    {
        this.date = new Date();
        this.date.setUTCFullYear(parseInt(line.substring(12, 16)));
        this.date.setUTCMonth(parseInt(line.substring(17, 19)));
        this.date.setUTCDate(parseInt(line.substring(20, 22)));
        this.date.setUTCHours(parseInt(line.substring(24, 26)));
        this.date.setUTCMinutes(parseInt(line.substring(27, 29)));
        this.date.setUTCSeconds(parseFloat(line.substring(30, 35)));

        this.longitude = parseFloat(line.substring(44, 52));
        this.latitude = parseFloat(line.substring(37, 44));
        this.magnitude = parseFloat(line.substring(66, 70));
        this.normalizedMagnitude = this.magnitude;
    }
}