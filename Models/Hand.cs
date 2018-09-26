using System.Collections.Generic;
using MySql.Data.MySqlClient;
using ML_poker;
using System;

namespace ML_poker.Models
{
  public class Hand
  {
    private int _id;
    private string _name;
    private int _win;
    private int _lose;
    private int _total;

    public Hand(string Name, int Win, int Lose, int Total, int Id = 0)
    {
      _id = Id;
      _name = Name;
      _win = Win;
      _lose = Lose;
      _total = Total;
    }
    public void AddHandWin(string handName)
    {
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"UPDATE hand SET win = win + 1, total = total + 1 CASE WHEN name = @handName END, CASE WHEN id=10 END;";

        MySqlParameter handName = new MySqlParameter();
        searchId.ParameterName = "@handName";
        searchId.Value = _name;
        cmd.Parameters.Add(handName);

        cmd.ExecuteNonQuery();
        _win = _win + 1;

        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }
    }
    public void AddHandLose(string handName)
    {
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"UPDATE hand SET lose = lose + 1, total = total + 1 CASE WHEN name = @handName END, CASE WHEN id=10 END;";

        MySqlParameter handName = new MySqlParameter();
        searchId.ParameterName = "@handName";
        searchId.Value = _name;
        cmd.Parameters.Add(handName);

        cmd.ExecuteNonQuery();
        _lose = _lose + 1;

        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }
    }
    public static List<Hand> GetAllHands()
        {
            List<Hand> allHands = new List<Hand> {};
            MySqlConnection conn = DB.Connection();
            conn.Open();
            MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
            cmd.CommandText = @"SELECT * FROM hand;";
            MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;
            while(rdr.Read())
            {
              int handId = rdr.GetInt32(0);
              string handName = rdr.GetString(1);
              int handWin = rdr.GetInt32(2);
              int handLose = rdr.GetInt32(3);
              int handTotal = rdr.GetInt32(4);
              Hand newHand = new Hand(handName, handWin, handLose, handTotal, handId);
              allHands.Add(newHand);
            }
            conn.Close();
            if (conn != null)
            {
                conn.Dispose();
            }
            return allHands;
        }
  }
}
