package team10spring2021cmpe272.petgohome.BackEndUtilities;

public class SystemOptionalLogging {
    public static void log(String string) {
//        boolean loggingEnabled = System.getenv("SysOLogEnabled").equals("true") ? true : false;
        boolean loggingEnabled = true;
        if(loggingEnabled) {
            System.out.println(string);
        }
    }
}
