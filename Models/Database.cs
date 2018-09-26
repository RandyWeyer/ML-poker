using System;
using MySql.Data.MySqlClient;
using ML_poker;

namespace ML_poker.Models
{
    public class DB
    {
        public static MySqlConnection Connection()
        {
            MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
            return conn;
        }
    }
}
