export class GameUtils {
    public static Make2DArray<T>(cols: number, rows: number): Array<T[]> {
        var arr = new Array<T[]>(cols);

        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array<T>(rows);
        }

        return arr;
    }

    public static MakeAnyDepthArray<T>(vals: number[]): Array<T[]> {
        // TODO: This one doesn't work in typscript, only javascrpt. Need to figure out why.
        var arrSize = vals.shift();
        var arr = new Array(arrSize);

        if (vals.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                arr[i] = GameUtils.MakeAnyDepthArray<T>(vals);
            }
        }

        return arr;
    }
}